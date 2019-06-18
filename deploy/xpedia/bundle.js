
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var app = (function () {
  'use strict';

  function isNothing(subject) {
    return (typeof subject === 'undefined') || (subject === null);
  }


  function isObject(subject) {
    return (typeof subject === 'object') && (subject !== null);
  }


  function toArray(sequence) {
    if (Array.isArray(sequence)) return sequence;
    else if (isNothing(sequence)) return [];

    return [ sequence ];
  }


  function extend(target, source) {
    var index, length, key, sourceKeys;

    if (source) {
      sourceKeys = Object.keys(source);

      for (index = 0, length = sourceKeys.length; index < length; index += 1) {
        key = sourceKeys[index];
        target[key] = source[key];
      }
    }

    return target;
  }


  function repeat(string, count) {
    var result = '', cycle;

    for (cycle = 0; cycle < count; cycle += 1) {
      result += string;
    }

    return result;
  }


  function isNegativeZero(number) {
    return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
  }


  var isNothing_1      = isNothing;
  var isObject_1       = isObject;
  var toArray_1        = toArray;
  var repeat_1         = repeat;
  var isNegativeZero_1 = isNegativeZero;
  var extend_1         = extend;

  var common = {
  	isNothing: isNothing_1,
  	isObject: isObject_1,
  	toArray: toArray_1,
  	repeat: repeat_1,
  	isNegativeZero: isNegativeZero_1,
  	extend: extend_1
  };

  // YAML error class. http://stackoverflow.com/questions/8458984

  function YAMLException(reason, mark) {
    // Super constructor
    Error.call(this);

    this.name = 'YAMLException';
    this.reason = reason;
    this.mark = mark;
    this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');

    // Include stack trace in error object
    if (Error.captureStackTrace) {
      // Chrome and NodeJS
      Error.captureStackTrace(this, this.constructor);
    } else {
      // FF, IE 10+ and Safari 6+. Fallback for others
      this.stack = (new Error()).stack || '';
    }
  }


  // Inherit from Error
  YAMLException.prototype = Object.create(Error.prototype);
  YAMLException.prototype.constructor = YAMLException;


  YAMLException.prototype.toString = function toString(compact) {
    var result = this.name + ': ';

    result += this.reason || '(unknown reason)';

    if (!compact && this.mark) {
      result += ' ' + this.mark.toString();
    }

    return result;
  };


  var exception = YAMLException;

  function Mark(name, buffer, position, line, column) {
    this.name     = name;
    this.buffer   = buffer;
    this.position = position;
    this.line     = line;
    this.column   = column;
  }


  Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
    var head, start, tail, end, snippet;

    if (!this.buffer) return null;

    indent = indent || 4;
    maxLength = maxLength || 75;

    head = '';
    start = this.position;

    while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
      start -= 1;
      if (this.position - start > (maxLength / 2 - 1)) {
        head = ' ... ';
        start += 5;
        break;
      }
    }

    tail = '';
    end = this.position;

    while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
      end += 1;
      if (end - this.position > (maxLength / 2 - 1)) {
        tail = ' ... ';
        end -= 5;
        break;
      }
    }

    snippet = this.buffer.slice(start, end);

    return common.repeat(' ', indent) + head + snippet + tail + '\n' +
           common.repeat(' ', indent + this.position - start + head.length) + '^';
  };


  Mark.prototype.toString = function toString(compact) {
    var snippet, where = '';

    if (this.name) {
      where += 'in "' + this.name + '" ';
    }

    where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

    if (!compact) {
      snippet = this.getSnippet();

      if (snippet) {
        where += ':\n' + snippet;
      }
    }

    return where;
  };


  var mark = Mark;

  var TYPE_CONSTRUCTOR_OPTIONS = [
    'kind',
    'resolve',
    'construct',
    'instanceOf',
    'predicate',
    'represent',
    'defaultStyle',
    'styleAliases'
  ];

  var YAML_NODE_KINDS = [
    'scalar',
    'sequence',
    'mapping'
  ];

  function compileStyleAliases(map) {
    var result = {};

    if (map !== null) {
      Object.keys(map).forEach(function (style) {
        map[style].forEach(function (alias) {
          result[String(alias)] = style;
        });
      });
    }

    return result;
  }

  function Type(tag, options) {
    options = options || {};

    Object.keys(options).forEach(function (name) {
      if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
        throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
      }
    });

    // TODO: Add tag format check.
    this.tag          = tag;
    this.kind         = options['kind']         || null;
    this.resolve      = options['resolve']      || function () { return true; };
    this.construct    = options['construct']    || function (data) { return data; };
    this.instanceOf   = options['instanceOf']   || null;
    this.predicate    = options['predicate']    || null;
    this.represent    = options['represent']    || null;
    this.defaultStyle = options['defaultStyle'] || null;
    this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
      throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
  }

  var type = Type;

  /*eslint-disable max-len*/






  function compileList(schema, name, result) {
    var exclude = [];

    schema.include.forEach(function (includedSchema) {
      result = compileList(includedSchema, name, result);
    });

    schema[name].forEach(function (currentType) {
      result.forEach(function (previousType, previousIndex) {
        if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
          exclude.push(previousIndex);
        }
      });

      result.push(currentType);
    });

    return result.filter(function (type, index) {
      return exclude.indexOf(index) === -1;
    });
  }


  function compileMap(/* lists... */) {
    var result = {
          scalar: {},
          sequence: {},
          mapping: {},
          fallback: {}
        }, index, length;

    function collectType(type) {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }

    for (index = 0, length = arguments.length; index < length; index += 1) {
      arguments[index].forEach(collectType);
    }
    return result;
  }


  function Schema(definition) {
    this.include  = definition.include  || [];
    this.implicit = definition.implicit || [];
    this.explicit = definition.explicit || [];

    this.implicit.forEach(function (type) {
      if (type.loadKind && type.loadKind !== 'scalar') {
        throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
      }
    });

    this.compiledImplicit = compileList(this, 'implicit', []);
    this.compiledExplicit = compileList(this, 'explicit', []);
    this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
  }


  Schema.DEFAULT = null;


  Schema.create = function createSchema() {
    var schemas, types;

    switch (arguments.length) {
      case 1:
        schemas = Schema.DEFAULT;
        types = arguments[0];
        break;

      case 2:
        schemas = arguments[0];
        types = arguments[1];
        break;

      default:
        throw new exception('Wrong number of arguments for Schema.create function');
    }

    schemas = common.toArray(schemas);
    types = common.toArray(types);

    if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
      throw new exception('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
    }

    if (!types.every(function (type$1) { return type$1 instanceof type; })) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    return new Schema({
      include: schemas,
      explicit: types
    });
  };


  var schema = Schema;

  var str = new type('tag:yaml.org,2002:str', {
    kind: 'scalar',
    construct: function (data) { return data !== null ? data : ''; }
  });

  var seq = new type('tag:yaml.org,2002:seq', {
    kind: 'sequence',
    construct: function (data) { return data !== null ? data : []; }
  });

  var map = new type('tag:yaml.org,2002:map', {
    kind: 'mapping',
    construct: function (data) { return data !== null ? data : {}; }
  });

  var failsafe = new schema({
    explicit: [
      str,
      seq,
      map
    ]
  });

  function resolveYamlNull(data) {
    if (data === null) return true;

    var max = data.length;

    return (max === 1 && data === '~') ||
           (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
  }

  function constructYamlNull() {
    return null;
  }

  function isNull(object) {
    return object === null;
  }

  var _null = new type('tag:yaml.org,2002:null', {
    kind: 'scalar',
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
      canonical: function () { return '~';    },
      lowercase: function () { return 'null'; },
      uppercase: function () { return 'NULL'; },
      camelcase: function () { return 'Null'; }
    },
    defaultStyle: 'lowercase'
  });

  function resolveYamlBoolean(data) {
    if (data === null) return false;

    var max = data.length;

    return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
           (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
  }

  function constructYamlBoolean(data) {
    return data === 'true' ||
           data === 'True' ||
           data === 'TRUE';
  }

  function isBoolean(object) {
    return Object.prototype.toString.call(object) === '[object Boolean]';
  }

  var bool = new type('tag:yaml.org,2002:bool', {
    kind: 'scalar',
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
      lowercase: function (object) { return object ? 'true' : 'false'; },
      uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
      camelcase: function (object) { return object ? 'True' : 'False'; }
    },
    defaultStyle: 'lowercase'
  });

  function isHexCode(c) {
    return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
           ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
           ((0x61/* a */ <= c) && (c <= 0x66/* f */));
  }

  function isOctCode(c) {
    return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
  }

  function isDecCode(c) {
    return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
  }

  function resolveYamlInteger(data) {
    if (data === null) return false;

    var max = data.length,
        index = 0,
        hasDigits = false,
        ch;

    if (!max) return false;

    ch = data[index];

    // sign
    if (ch === '-' || ch === '+') {
      ch = data[++index];
    }

    if (ch === '0') {
      // 0
      if (index + 1 === max) return true;
      ch = data[++index];

      // base 2, base 8, base 16

      if (ch === 'b') {
        // base 2
        index++;

        for (; index < max; index++) {
          ch = data[index];
          if (ch === '_') continue;
          if (ch !== '0' && ch !== '1') return false;
          hasDigits = true;
        }
        return hasDigits && ch !== '_';
      }


      if (ch === 'x') {
        // base 16
        index++;

        for (; index < max; index++) {
          ch = data[index];
          if (ch === '_') continue;
          if (!isHexCode(data.charCodeAt(index))) return false;
          hasDigits = true;
        }
        return hasDigits && ch !== '_';
      }

      // base 8
      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }

    // base 10 (except 0) or base 60

    // value should not start with `_`;
    if (ch === '_') return false;

    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') continue;
      if (ch === ':') break;
      if (!isDecCode(data.charCodeAt(index))) {
        return false;
      }
      hasDigits = true;
    }

    // Should have digits and should not end with `_`
    if (!hasDigits || ch === '_') return false;

    // if !base60 - done;
    if (ch !== ':') return true;

    // base60 almost not used, no needs to optimize
    return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
  }

  function constructYamlInteger(data) {
    var value = data, sign = 1, ch, base, digits = [];

    if (value.indexOf('_') !== -1) {
      value = value.replace(/_/g, '');
    }

    ch = value[0];

    if (ch === '-' || ch === '+') {
      if (ch === '-') sign = -1;
      value = value.slice(1);
      ch = value[0];
    }

    if (value === '0') return 0;

    if (ch === '0') {
      if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
      if (value[1] === 'x') return sign * parseInt(value, 16);
      return sign * parseInt(value, 8);
    }

    if (value.indexOf(':') !== -1) {
      value.split(':').forEach(function (v) {
        digits.unshift(parseInt(v, 10));
      });

      value = 0;
      base = 1;

      digits.forEach(function (d) {
        value += (d * base);
        base *= 60;
      });

      return sign * value;

    }

    return sign * parseInt(value, 10);
  }

  function isInteger(object) {
    return (Object.prototype.toString.call(object)) === '[object Number]' &&
           (object % 1 === 0 && !common.isNegativeZero(object));
  }

  var int_1 = new type('tag:yaml.org,2002:int', {
    kind: 'scalar',
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
      binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
      octal:       function (obj) { return obj >= 0 ? '0'  + obj.toString(8) : '-0'  + obj.toString(8).slice(1); },
      decimal:     function (obj) { return obj.toString(10); },
      /* eslint-disable max-len */
      hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
    },
    defaultStyle: 'decimal',
    styleAliases: {
      binary:      [ 2,  'bin' ],
      octal:       [ 8,  'oct' ],
      decimal:     [ 10, 'dec' ],
      hexadecimal: [ 16, 'hex' ]
    }
  });

  var YAML_FLOAT_PATTERN = new RegExp(
    // 2.5e4, 2.5 and integers
    '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
    // .2e4, .2
    // special case, seems not from spec
    '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
    // 20:59
    '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
    // .inf
    '|[-+]?\\.(?:inf|Inf|INF)' +
    // .nan
    '|\\.(?:nan|NaN|NAN))$');

  function resolveYamlFloat(data) {
    if (data === null) return false;

    if (!YAML_FLOAT_PATTERN.test(data) ||
        // Quick hack to not allow integers end with `_`
        // Probably should update regexp & check speed
        data[data.length - 1] === '_') {
      return false;
    }

    return true;
  }

  function constructYamlFloat(data) {
    var value, sign, base, digits;

    value  = data.replace(/_/g, '').toLowerCase();
    sign   = value[0] === '-' ? -1 : 1;
    digits = [];

    if ('+-'.indexOf(value[0]) >= 0) {
      value = value.slice(1);
    }

    if (value === '.inf') {
      return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

    } else if (value === '.nan') {
      return NaN;

    } else if (value.indexOf(':') >= 0) {
      value.split(':').forEach(function (v) {
        digits.unshift(parseFloat(v, 10));
      });

      value = 0.0;
      base = 1;

      digits.forEach(function (d) {
        value += d * base;
        base *= 60;
      });

      return sign * value;

    }
    return sign * parseFloat(value, 10);
  }


  var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

  function representYamlFloat(object, style) {
    var res;

    if (isNaN(object)) {
      switch (style) {
        case 'lowercase': return '.nan';
        case 'uppercase': return '.NAN';
        case 'camelcase': return '.NaN';
      }
    } else if (Number.POSITIVE_INFINITY === object) {
      switch (style) {
        case 'lowercase': return '.inf';
        case 'uppercase': return '.INF';
        case 'camelcase': return '.Inf';
      }
    } else if (Number.NEGATIVE_INFINITY === object) {
      switch (style) {
        case 'lowercase': return '-.inf';
        case 'uppercase': return '-.INF';
        case 'camelcase': return '-.Inf';
      }
    } else if (common.isNegativeZero(object)) {
      return '-0.0';
    }

    res = object.toString(10);

    // JS stringifier can build scientific format without dots: 5e-100,
    // while YAML requres dot: 5.e-100. Fix it with simple hack

    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
  }

  function isFloat(object) {
    return (Object.prototype.toString.call(object) === '[object Number]') &&
           (object % 1 !== 0 || common.isNegativeZero(object));
  }

  var float_1 = new type('tag:yaml.org,2002:float', {
    kind: 'scalar',
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: 'lowercase'
  });

  var json = new schema({
    include: [
      failsafe
    ],
    implicit: [
      _null,
      bool,
      int_1,
      float_1
    ]
  });

  var core = new schema({
    include: [
      json
    ]
  });

  var YAML_DATE_REGEXP = new RegExp(
    '^([0-9][0-9][0-9][0-9])'          + // [1] year
    '-([0-9][0-9])'                    + // [2] month
    '-([0-9][0-9])$');                   // [3] day

  var YAML_TIMESTAMP_REGEXP = new RegExp(
    '^([0-9][0-9][0-9][0-9])'          + // [1] year
    '-([0-9][0-9]?)'                   + // [2] month
    '-([0-9][0-9]?)'                   + // [3] day
    '(?:[Tt]|[ \\t]+)'                 + // ...
    '([0-9][0-9]?)'                    + // [4] hour
    ':([0-9][0-9])'                    + // [5] minute
    ':([0-9][0-9])'                    + // [6] second
    '(?:\\.([0-9]*))?'                 + // [7] fraction
    '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
    '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

  function resolveYamlTimestamp(data) {
    if (data === null) return false;
    if (YAML_DATE_REGEXP.exec(data) !== null) return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
    return false;
  }

  function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0,
        delta = null, tz_hour, tz_minute, date;

    match = YAML_DATE_REGEXP.exec(data);
    if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

    if (match === null) throw new Error('Date resolve error');

    // match: [1] year [2] month [3] day

    year = +(match[1]);
    month = +(match[2]) - 1; // JS month starts with 0
    day = +(match[3]);

    if (!match[4]) { // no hour
      return new Date(Date.UTC(year, month, day));
    }

    // match: [4] hour [5] minute [6] second [7] fraction

    hour = +(match[4]);
    minute = +(match[5]);
    second = +(match[6]);

    if (match[7]) {
      fraction = match[7].slice(0, 3);
      while (fraction.length < 3) { // milli-seconds
        fraction += '0';
      }
      fraction = +fraction;
    }

    // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

    if (match[9]) {
      tz_hour = +(match[10]);
      tz_minute = +(match[11] || 0);
      delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
      if (match[9] === '-') delta = -delta;
    }

    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

    if (delta) date.setTime(date.getTime() - delta);

    return date;
  }

  function representYamlTimestamp(object /*, style*/) {
    return object.toISOString();
  }

  var timestamp = new type('tag:yaml.org,2002:timestamp', {
    kind: 'scalar',
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
  });

  function resolveYamlMerge(data) {
    return data === '<<' || data === null;
  }

  var merge = new type('tag:yaml.org,2002:merge', {
    kind: 'scalar',
    resolve: resolveYamlMerge
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*eslint-disable no-bitwise*/

  var NodeBuffer;

  try {
    // A trick for browserified version, to not include `Buffer` shim
    var _require = commonjsRequire;
    NodeBuffer = _require('buffer').Buffer;
  } catch (__) {}




  // [ 64, 65, 66 ] -> [ padding, CR, LF ]
  var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


  function resolveYamlBinary(data) {
    if (data === null) return false;

    var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

    // Convert one by one.
    for (idx = 0; idx < max; idx++) {
      code = map.indexOf(data.charAt(idx));

      // Skip CR/LF
      if (code > 64) continue;

      // Fail on illegal characters
      if (code < 0) return false;

      bitlen += 6;
    }

    // If there are any bits left, source was corrupted
    return (bitlen % 8) === 0;
  }

  function constructYamlBinary(data) {
    var idx, tailbits,
        input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
        max = input.length,
        map = BASE64_MAP,
        bits = 0,
        result = [];

    // Collect by 6*4 bits (3 bytes)

    for (idx = 0; idx < max; idx++) {
      if ((idx % 4 === 0) && idx) {
        result.push((bits >> 16) & 0xFF);
        result.push((bits >> 8) & 0xFF);
        result.push(bits & 0xFF);
      }

      bits = (bits << 6) | map.indexOf(input.charAt(idx));
    }

    // Dump tail

    tailbits = (max % 4) * 6;

    if (tailbits === 0) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    } else if (tailbits === 18) {
      result.push((bits >> 10) & 0xFF);
      result.push((bits >> 2) & 0xFF);
    } else if (tailbits === 12) {
      result.push((bits >> 4) & 0xFF);
    }

    // Wrap into Buffer for NodeJS and leave Array for browser
    if (NodeBuffer) {
      // Support node 6.+ Buffer API when available
      return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
    }

    return result;
  }

  function representYamlBinary(object /*, style*/) {
    var result = '', bits = 0, idx, tail,
        max = object.length,
        map = BASE64_MAP;

    // Convert every three bytes to 4 ASCII characters.

    for (idx = 0; idx < max; idx++) {
      if ((idx % 3 === 0) && idx) {
        result += map[(bits >> 18) & 0x3F];
        result += map[(bits >> 12) & 0x3F];
        result += map[(bits >> 6) & 0x3F];
        result += map[bits & 0x3F];
      }

      bits = (bits << 8) + object[idx];
    }

    // Dump tail

    tail = max % 3;

    if (tail === 0) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    } else if (tail === 2) {
      result += map[(bits >> 10) & 0x3F];
      result += map[(bits >> 4) & 0x3F];
      result += map[(bits << 2) & 0x3F];
      result += map[64];
    } else if (tail === 1) {
      result += map[(bits >> 2) & 0x3F];
      result += map[(bits << 4) & 0x3F];
      result += map[64];
      result += map[64];
    }

    return result;
  }

  function isBinary(object) {
    return NodeBuffer && NodeBuffer.isBuffer(object);
  }

  var binary = new type('tag:yaml.org,2002:binary', {
    kind: 'scalar',
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
  });

  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var _toString       = Object.prototype.toString;

  function resolveYamlOmap(data) {
    if (data === null) return true;

    var objectKeys = [], index, length, pair, pairKey, pairHasKey,
        object = data;

    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      pairHasKey = false;

      if (_toString.call(pair) !== '[object Object]') return false;

      for (pairKey in pair) {
        if (_hasOwnProperty.call(pair, pairKey)) {
          if (!pairHasKey) pairHasKey = true;
          else return false;
        }
      }

      if (!pairHasKey) return false;

      if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
      else return false;
    }

    return true;
  }

  function constructYamlOmap(data) {
    return data !== null ? data : [];
  }

  var omap = new type('tag:yaml.org,2002:omap', {
    kind: 'sequence',
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
  });

  var _toString$1 = Object.prototype.toString;

  function resolveYamlPairs(data) {
    if (data === null) return true;

    var index, length, pair, keys, result,
        object = data;

    result = new Array(object.length);

    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];

      if (_toString$1.call(pair) !== '[object Object]') return false;

      keys = Object.keys(pair);

      if (keys.length !== 1) return false;

      result[index] = [ keys[0], pair[keys[0]] ];
    }

    return true;
  }

  function constructYamlPairs(data) {
    if (data === null) return [];

    var index, length, pair, keys, result,
        object = data;

    result = new Array(object.length);

    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];

      keys = Object.keys(pair);

      result[index] = [ keys[0], pair[keys[0]] ];
    }

    return result;
  }

  var pairs = new type('tag:yaml.org,2002:pairs', {
    kind: 'sequence',
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
  });

  var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;

  function resolveYamlSet(data) {
    if (data === null) return true;

    var key, object = data;

    for (key in object) {
      if (_hasOwnProperty$1.call(object, key)) {
        if (object[key] !== null) return false;
      }
    }

    return true;
  }

  function constructYamlSet(data) {
    return data !== null ? data : {};
  }

  var set = new type('tag:yaml.org,2002:set', {
    kind: 'mapping',
    resolve: resolveYamlSet,
    construct: constructYamlSet
  });

  var default_safe = new schema({
    include: [
      core
    ],
    implicit: [
      timestamp,
      merge
    ],
    explicit: [
      binary,
      omap,
      pairs,
      set
    ]
  });

  function resolveJavascriptUndefined() {
    return true;
  }

  function constructJavascriptUndefined() {
    /*eslint-disable no-undefined*/
    return undefined;
  }

  function representJavascriptUndefined() {
    return '';
  }

  function isUndefined(object) {
    return typeof object === 'undefined';
  }

  var _undefined = new type('tag:yaml.org,2002:js/undefined', {
    kind: 'scalar',
    resolve: resolveJavascriptUndefined,
    construct: constructJavascriptUndefined,
    predicate: isUndefined,
    represent: representJavascriptUndefined
  });

  function resolveJavascriptRegExp(data) {
    if (data === null) return false;
    if (data.length === 0) return false;

    var regexp = data,
        tail   = /\/([gim]*)$/.exec(data),
        modifiers = '';

    // if regexp starts with '/' it can have modifiers and must be properly closed
    // `/foo/gim` - modifiers tail can be maximum 3 chars
    if (regexp[0] === '/') {
      if (tail) modifiers = tail[1];

      if (modifiers.length > 3) return false;
      // if expression starts with /, is should be properly terminated
      if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
    }

    return true;
  }

  function constructJavascriptRegExp(data) {
    var regexp = data,
        tail   = /\/([gim]*)$/.exec(data),
        modifiers = '';

    // `/foo/gim` - tail can be maximum 4 chars
    if (regexp[0] === '/') {
      if (tail) modifiers = tail[1];
      regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
    }

    return new RegExp(regexp, modifiers);
  }

  function representJavascriptRegExp(object /*, style*/) {
    var result = '/' + object.source + '/';

    if (object.global) result += 'g';
    if (object.multiline) result += 'm';
    if (object.ignoreCase) result += 'i';

    return result;
  }

  function isRegExp(object) {
    return Object.prototype.toString.call(object) === '[object RegExp]';
  }

  var regexp = new type('tag:yaml.org,2002:js/regexp', {
    kind: 'scalar',
    resolve: resolveJavascriptRegExp,
    construct: constructJavascriptRegExp,
    predicate: isRegExp,
    represent: representJavascriptRegExp
  });

  var esprima;

  // Browserified version does not have esprima
  //
  // 1. For node.js just require module as deps
  // 2. For browser try to require mudule via external AMD system.
  //    If not found - try to fallback to window.esprima. If not
  //    found too - then fail to parse.
  //
  try {
    // workaround to exclude package from browserify list.
    var _require$1 = commonjsRequire;
    esprima = _require$1('esprima');
  } catch (_) {
    /*global window */
    if (typeof window !== 'undefined') esprima = window.esprima;
  }



  function resolveJavascriptFunction(data) {
    if (data === null) return false;

    try {
      var source = '(' + data + ')',
          ast    = esprima.parse(source, { range: true });

      if (ast.type                    !== 'Program'             ||
          ast.body.length             !== 1                     ||
          ast.body[0].type            !== 'ExpressionStatement' ||
          (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
            ast.body[0].expression.type !== 'FunctionExpression')) {
        return false;
      }

      return true;
    } catch (err) {
      return false;
    }
  }

  function constructJavascriptFunction(data) {
    /*jslint evil:true*/

    var source = '(' + data + ')',
        ast    = esprima.parse(source, { range: true }),
        params = [],
        body;

    if (ast.type                    !== 'Program'             ||
        ast.body.length             !== 1                     ||
        ast.body[0].type            !== 'ExpressionStatement' ||
        (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
          ast.body[0].expression.type !== 'FunctionExpression')) {
      throw new Error('Failed to resolve function');
    }

    ast.body[0].expression.params.forEach(function (param) {
      params.push(param.name);
    });

    body = ast.body[0].expression.body.range;

    // Esprima's ranges include the first '{' and the last '}' characters on
    // function expressions. So cut them out.
    if (ast.body[0].expression.body.type === 'BlockStatement') {
      /*eslint-disable no-new-func*/
      return new Function(params, source.slice(body[0] + 1, body[1] - 1));
    }
    // ES6 arrow functions can omit the BlockStatement. In that case, just return
    // the body.
    /*eslint-disable no-new-func*/
    return new Function(params, 'return ' + source.slice(body[0], body[1]));
  }

  function representJavascriptFunction(object /*, style*/) {
    return object.toString();
  }

  function isFunction(object) {
    return Object.prototype.toString.call(object) === '[object Function]';
  }

  var _function = new type('tag:yaml.org,2002:js/function', {
    kind: 'scalar',
    resolve: resolveJavascriptFunction,
    construct: constructJavascriptFunction,
    predicate: isFunction,
    represent: representJavascriptFunction
  });

  var default_full = schema.DEFAULT = new schema({
    include: [
      default_safe
    ],
    explicit: [
      _undefined,
      regexp,
      _function
    ]
  });

  /*eslint-disable max-len,no-use-before-define*/








  var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;


  var CONTEXT_FLOW_IN   = 1;
  var CONTEXT_FLOW_OUT  = 2;
  var CONTEXT_BLOCK_IN  = 3;
  var CONTEXT_BLOCK_OUT = 4;


  var CHOMPING_CLIP  = 1;
  var CHOMPING_STRIP = 2;
  var CHOMPING_KEEP  = 3;


  var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
  var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
  var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
  var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


  function _class(obj) { return Object.prototype.toString.call(obj); }

  function is_EOL(c) {
    return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
  }

  function is_WHITE_SPACE(c) {
    return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
  }

  function is_WS_OR_EOL(c) {
    return (c === 0x09/* Tab */) ||
           (c === 0x20/* Space */) ||
           (c === 0x0A/* LF */) ||
           (c === 0x0D/* CR */);
  }

  function is_FLOW_INDICATOR(c) {
    return c === 0x2C/* , */ ||
           c === 0x5B/* [ */ ||
           c === 0x5D/* ] */ ||
           c === 0x7B/* { */ ||
           c === 0x7D/* } */;
  }

  function fromHexCode(c) {
    var lc;

    if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
      return c - 0x30;
    }

    /*eslint-disable no-bitwise*/
    lc = c | 0x20;

    if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
      return lc - 0x61 + 10;
    }

    return -1;
  }

  function escapedHexLen(c) {
    if (c === 0x78/* x */) { return 2; }
    if (c === 0x75/* u */) { return 4; }
    if (c === 0x55/* U */) { return 8; }
    return 0;
  }

  function fromDecimalCode(c) {
    if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
      return c - 0x30;
    }

    return -1;
  }

  function simpleEscapeSequence(c) {
    /* eslint-disable indent */
    return (c === 0x30/* 0 */) ? '\x00' :
          (c === 0x61/* a */) ? '\x07' :
          (c === 0x62/* b */) ? '\x08' :
          (c === 0x74/* t */) ? '\x09' :
          (c === 0x09/* Tab */) ? '\x09' :
          (c === 0x6E/* n */) ? '\x0A' :
          (c === 0x76/* v */) ? '\x0B' :
          (c === 0x66/* f */) ? '\x0C' :
          (c === 0x72/* r */) ? '\x0D' :
          (c === 0x65/* e */) ? '\x1B' :
          (c === 0x20/* Space */) ? ' ' :
          (c === 0x22/* " */) ? '\x22' :
          (c === 0x2F/* / */) ? '/' :
          (c === 0x5C/* \ */) ? '\x5C' :
          (c === 0x4E/* N */) ? '\x85' :
          (c === 0x5F/* _ */) ? '\xA0' :
          (c === 0x4C/* L */) ? '\u2028' :
          (c === 0x50/* P */) ? '\u2029' : '';
  }

  function charFromCodepoint(c) {
    if (c <= 0xFFFF) {
      return String.fromCharCode(c);
    }
    // Encode UTF-16 surrogate pair
    // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
    return String.fromCharCode(
      ((c - 0x010000) >> 10) + 0xD800,
      ((c - 0x010000) & 0x03FF) + 0xDC00
    );
  }

  var simpleEscapeCheck = new Array(256); // integer, for fast access
  var simpleEscapeMap = new Array(256);
  for (var i = 0; i < 256; i++) {
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
  }


  function State(input, options) {
    this.input = input;

    this.filename  = options['filename']  || null;
    this.schema    = options['schema']    || default_full;
    this.onWarning = options['onWarning'] || null;
    this.legacy    = options['legacy']    || false;
    this.json      = options['json']      || false;
    this.listener  = options['listener']  || null;

    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap       = this.schema.compiledTypeMap;

    this.length     = input.length;
    this.position   = 0;
    this.line       = 0;
    this.lineStart  = 0;
    this.lineIndent = 0;

    this.documents = [];

    /*
    this.version;
    this.checkLineBreaks;
    this.tagMap;
    this.anchorMap;
    this.tag;
    this.anchor;
    this.kind;
    this.result;*/

  }


  function generateError(state, message) {
    console.log(state);
    return new exception(
      message,
      new mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
  }

  function throwError(state, message) {	
    throw generateError(state, message);
  }

  function throwWarning(state, message) {
    if (state.onWarning) {
      state.onWarning.call(null, generateError(state, message));
    }
  }


  var directiveHandlers = {

    YAML: function handleYamlDirective(state, name, args) {

      var match, major, minor;

      if (state.version !== null) {
        throwError(state, 'duplication of %YAML directive');
      }

      if (args.length !== 1) {
        throwError(state, 'YAML directive accepts exactly one argument');
      }

      match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

      if (match === null) {
        throwError(state, 'ill-formed argument of the YAML directive');
      }

      major = parseInt(match[1], 10);
      minor = parseInt(match[2], 10);

      if (major !== 1) {
        throwError(state, 'unacceptable YAML version of the document');
      }

      state.version = args[0];
      state.checkLineBreaks = (minor < 2);

      if (minor !== 1 && minor !== 2) {
        throwWarning(state, 'unsupported YAML version of the document');
      }
    },

    TAG: function handleTagDirective(state, name, args) {

      var handle, prefix;

      if (args.length !== 2) {
        throwError(state, 'TAG directive accepts exactly two arguments');
      }

      handle = args[0];
      prefix = args[1];

      if (!PATTERN_TAG_HANDLE.test(handle)) {
        throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
      }

      if (_hasOwnProperty$2.call(state.tagMap, handle)) {
        throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
      }

      if (!PATTERN_TAG_URI.test(prefix)) {
        throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
      }

      state.tagMap[handle] = prefix;
    }
  };


  function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;

    if (start < end) {
      _result = state.input.slice(start, end);

      if (checkJson) {
        for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
          _character = _result.charCodeAt(_position);
          if (!(_character === 0x09 ||
                (0x20 <= _character && _character <= 0x10FFFF))) {
            throwError(state, 'expected valid JSON character');
          }
        }
      } else if (PATTERN_NON_PRINTABLE.test(_result)) {
        throwError(state, 'the stream contains non-printable characters');
      }

      state.result += _result;
    }
  }

  function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;

    if (!common.isObject(source)) {
      throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
    }

    sourceKeys = Object.keys(source);

    for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
      key = sourceKeys[index];

      if (!_hasOwnProperty$2.call(destination, key)) {
        destination[key] = source[key];
        overridableKeys[key] = true;
      }
    }
  }

  function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
    var index, quantity;

    // The output is a plain object here, so keys can only be strings.
    // We need to convert keyNode to a string, but doing so can hang the process
    // (deeply nested arrays that explode exponentially using aliases).
    if (Array.isArray(keyNode)) {
      keyNode = Array.prototype.slice.call(keyNode);

      for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
        if (Array.isArray(keyNode[index])) {
          throwError(state, 'nested arrays are not supported inside keys');
        }

        if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
          keyNode[index] = '[object Object]';
        }
      }
    }

    // Avoid code execution in load() via toString property
    // (still use its own toString for arrays, timestamps,
    // and whatever user schema extensions happen to have @@toStringTag)
    if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
      keyNode = '[object Object]';
    }


    keyNode = String(keyNode);

    if (_result === null) {
      _result = {};
    }

    if (keyTag === 'tag:yaml.org,2002:merge') {
      if (Array.isArray(valueNode)) {
        for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
          mergeMappings(state, _result, valueNode[index], overridableKeys);
        }
      } else {
        mergeMappings(state, _result, valueNode, overridableKeys);
      }
    } else {
      if (!state.json &&
          !_hasOwnProperty$2.call(overridableKeys, keyNode) &&
          _hasOwnProperty$2.call(_result, keyNode)) {
        state.line = startLine || state.line;
        state.position = startPos || state.position;
        throwError(state, 'duplicated mapping key');
      }
      _result[keyNode] = valueNode;
      delete overridableKeys[keyNode];
    }

    return _result;
  }

  function readLineBreak(state) {
    var ch;

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x0A/* LF */) {
      state.position++;
    } else if (ch === 0x0D/* CR */) {
      state.position++;
      if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
        state.position++;
      }
    } else {
      throwError(state, 'a line break is expected');
    }

    state.line += 1;
    state.lineStart = state.position;
  }

  function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0,
        ch = state.input.charCodeAt(state.position);

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (allowComments && ch === 0x23/* # */) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
      }

      if (is_EOL(ch)) {
        readLineBreak(state);

        ch = state.input.charCodeAt(state.position);
        lineBreaks++;
        state.lineIndent = 0;

        while (ch === 0x20/* Space */) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
      } else {
        break;
      }
    }

    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
      throwWarning(state, 'deficient indentation');
    }

    return lineBreaks;
  }

  function testDocumentSeparator(state) {
    var _position = state.position,
        ch;

    ch = state.input.charCodeAt(_position);

    // Condition state.position === state.lineStart is tested
    // in parent on each call, for efficiency. No needs to test here again.
    if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
        ch === state.input.charCodeAt(_position + 1) &&
        ch === state.input.charCodeAt(_position + 2)) {

      _position += 3;

      ch = state.input.charCodeAt(_position);

      if (ch === 0 || is_WS_OR_EOL(ch)) {
        return true;
      }
    }

    return false;
  }

  function writeFoldedLines(state, count) {
    if (count === 1) {
      state.result += ' ';
    } else if (count > 1) {
      state.result += common.repeat('\n', count - 1);
    }
  }


  function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding,
        following,
        captureStart,
        captureEnd,
        hasPendingContent,
        _line,
        _lineStart,
        _lineIndent,
        _kind = state.kind,
        _result = state.result,
        ch;

    ch = state.input.charCodeAt(state.position);

    if (is_WS_OR_EOL(ch)      ||
        is_FLOW_INDICATOR(ch) ||
        ch === 0x23/* # */    ||
        ch === 0x26/* & */    ||
        ch === 0x2A/* * */    ||
        ch === 0x21/* ! */    ||
        ch === 0x7C/* | */    ||
        ch === 0x3E/* > */    ||
        ch === 0x27/* ' */    ||
        ch === 0x22/* " */    ||
        ch === 0x25/* % */    ||
        ch === 0x40/* @ */    ||
        ch === 0x60/* ` */) {
      return false;
    }

    if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        return false;
      }
    }

    state.kind = 'scalar';
    state.result = '';
    captureStart = captureEnd = state.position;
    hasPendingContent = false;

    while (ch !== 0) {
      if (ch === 0x3A/* : */) {
        following = state.input.charCodeAt(state.position + 1);

        if (is_WS_OR_EOL(following) ||
            withinFlowCollection && is_FLOW_INDICATOR(following)) {
          break;
        }

      } else if (ch === 0x23/* # */) {
        preceding = state.input.charCodeAt(state.position - 1);

        if (is_WS_OR_EOL(preceding)) {
          break;
        }

      } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
                 withinFlowCollection && is_FLOW_INDICATOR(ch)) {
        break;

      } else if (is_EOL(ch)) {
        _line = state.line;
        _lineStart = state.lineStart;
        _lineIndent = state.lineIndent;
        skipSeparationSpace(state, false, -1);

        if (state.lineIndent >= nodeIndent) {
          hasPendingContent = true;
          ch = state.input.charCodeAt(state.position);
          continue;
        } else {
          state.position = captureEnd;
          state.line = _line;
          state.lineStart = _lineStart;
          state.lineIndent = _lineIndent;
          break;
        }
      }

      if (hasPendingContent) {
        captureSegment(state, captureStart, captureEnd, false);
        writeFoldedLines(state, state.line - _line);
        captureStart = captureEnd = state.position;
        hasPendingContent = false;
      }

      if (!is_WHITE_SPACE(ch)) {
        captureEnd = state.position + 1;
      }

      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, captureEnd, false);

    if (state.result) {
      return true;
    }

    state.kind = _kind;
    state.result = _result;
    return false;
  }

  function readSingleQuotedScalar(state, nodeIndent) {
    var ch,
        captureStart, captureEnd;

    ch = state.input.charCodeAt(state.position);

    if (ch !== 0x27/* ' */) {
      return false;
    }

    state.kind = 'scalar';
    state.result = '';
    state.position++;
    captureStart = captureEnd = state.position;

    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      if (ch === 0x27/* ' */) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);

        if (ch === 0x27/* ' */) {
          captureStart = state.position;
          state.position++;
          captureEnd = state.position;
        } else {
          return true;
        }

      } else if (is_EOL(ch)) {
        captureSegment(state, captureStart, captureEnd, true);
        writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
        captureStart = captureEnd = state.position;

      } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
        throwError(state, 'unexpected end of the document within a single quoted scalar');

      } else {
        state.position++;
        captureEnd = state.position;
      }
    }

    throwError(state, 'unexpected end of the stream within a single quoted scalar');
  }

  function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart,
        captureEnd,
        hexLength,
        hexResult,
        tmp,
        ch;

    ch = state.input.charCodeAt(state.position);

    if (ch !== 0x22/* " */) {
      return false;
    }

    state.kind = 'scalar';
    state.result = '';
    state.position++;
    captureStart = captureEnd = state.position;

    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      if (ch === 0x22/* " */) {
        captureSegment(state, captureStart, state.position, true);
        state.position++;
        return true;

      } else if (ch === 0x5C/* \ */) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);

        if (is_EOL(ch)) {
          skipSeparationSpace(state, false, nodeIndent);

          // TODO: rework to inline fn with no type cast?
        } else if (ch < 256 && simpleEscapeCheck[ch]) {
          state.result += simpleEscapeMap[ch];
          state.position++;

        } else if ((tmp = escapedHexLen(ch)) > 0) {
          hexLength = tmp;
          hexResult = 0;

          for (; hexLength > 0; hexLength--) {
            ch = state.input.charCodeAt(++state.position);

            if ((tmp = fromHexCode(ch)) >= 0) {
              hexResult = (hexResult << 4) + tmp;

            } else {
              throwError(state, 'expected hexadecimal character');
            }
          }

          state.result += charFromCodepoint(hexResult);

          state.position++;

        } else {
          throwError(state, 'unknown escape sequence');
        }

        captureStart = captureEnd = state.position;

      } else if (is_EOL(ch)) {
        captureSegment(state, captureStart, captureEnd, true);
        writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
        captureStart = captureEnd = state.position;

      } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
        throwError(state, 'unexpected end of the document within a double quoted scalar');

      } else {
        state.position++;
        captureEnd = state.position;
      }
    }

    throwError(state, 'unexpected end of the stream within a double quoted scalar');
  }

  function readFlowCollection(state, nodeIndent) {
    var readNext = true,
        _line,
        _tag     = state.tag,
        _result,
        _anchor  = state.anchor,
        following,
        terminator,
        isPair,
        isExplicitPair,
        isMapping,
        overridableKeys = {},
        keyNode,
        keyTag,
        valueNode,
        ch;

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x5B/* [ */) {
      terminator = 0x5D;/* ] */
      isMapping = false;
      _result = [];
    } else if (ch === 0x7B/* { */) {
      terminator = 0x7D;/* } */
      isMapping = true;
      _result = {};
    } else {
      return false;
    }

    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }

    ch = state.input.charCodeAt(++state.position);

    while (ch !== 0) {
      skipSeparationSpace(state, true, nodeIndent);

      ch = state.input.charCodeAt(state.position);

      if (ch === terminator) {
        state.position++;
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = isMapping ? 'mapping' : 'sequence';
        state.result = _result;
        return true;
      } else if (!readNext) {
        throwError(state, 'missed comma between flow collection entries');
      }

      keyTag = keyNode = valueNode = null;
      isPair = isExplicitPair = false;

      if (ch === 0x3F/* ? */) {
        following = state.input.charCodeAt(state.position + 1);

        if (is_WS_OR_EOL(following)) {
          isPair = isExplicitPair = true;
          state.position++;
          skipSeparationSpace(state, true, nodeIndent);
        }
      }

      _line = state.line;
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      keyTag = state.tag;
      keyNode = state.result;
      skipSeparationSpace(state, true, nodeIndent);

      ch = state.input.charCodeAt(state.position);

      if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
        isPair = true;
        ch = state.input.charCodeAt(++state.position);
        skipSeparationSpace(state, true, nodeIndent);
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        valueNode = state.result;
      }

      if (isMapping) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
      } else if (isPair) {
        _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
      } else {
        _result.push(keyNode);
      }

      skipSeparationSpace(state, true, nodeIndent);

      ch = state.input.charCodeAt(state.position);

      if (ch === 0x2C/* , */) {
        readNext = true;
        ch = state.input.charCodeAt(++state.position);
      } else {
        readNext = false;
      }
    }

    throwError(state, 'unexpected end of the stream within a flow collection');
  }

  function readBlockScalar(state, nodeIndent) {
    var captureStart,
        folding,
        chomping       = CHOMPING_CLIP,
        didReadContent = false,
        detectedIndent = false,
        textIndent     = nodeIndent,
        emptyLines     = 0,
        atMoreIndented = false,
        tmp,
        ch;

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x7C/* | */) {
      folding = false;
    } else if (ch === 0x3E/* > */) {
      folding = true;
    } else {
      return false;
    }

    state.kind = 'scalar';
    state.result = '';

    while (ch !== 0) {
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
        if (CHOMPING_CLIP === chomping) {
          chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
        } else {
          throwError(state, 'repeat of a chomping mode identifier');
        }

      } else if ((tmp = fromDecimalCode(ch)) >= 0) {
        if (tmp === 0) {
          throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
        } else if (!detectedIndent) {
          textIndent = nodeIndent + tmp - 1;
          detectedIndent = true;
        } else {
          throwError(state, 'repeat of an indentation width identifier');
        }

      } else {
        break;
      }
    }

    if (is_WHITE_SPACE(ch)) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (is_WHITE_SPACE(ch));

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (!is_EOL(ch) && (ch !== 0));
      }
    }

    while (ch !== 0) {
      readLineBreak(state);
      state.lineIndent = 0;

      ch = state.input.charCodeAt(state.position);

      while ((!detectedIndent || state.lineIndent < textIndent) &&
             (ch === 0x20/* Space */)) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }

      if (!detectedIndent && state.lineIndent > textIndent) {
        textIndent = state.lineIndent;
      }

      if (is_EOL(ch)) {
        emptyLines++;
        continue;
      }

      // End of the scalar.
      if (state.lineIndent < textIndent) {

        // Perform the chomping.
        if (chomping === CHOMPING_KEEP) {
          state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
        } else if (chomping === CHOMPING_CLIP) {
          if (didReadContent) { // i.e. only if the scalar is not empty.
            state.result += '\n';
          }
        }

        // Break this `while` cycle and go to the funciton's epilogue.
        break;
      }

      // Folded style: use fancy rules to handle line breaks.
      if (folding) {

        // Lines starting with white space characters (more-indented lines) are not folded.
        if (is_WHITE_SPACE(ch)) {
          atMoreIndented = true;
          // except for the first content line (cf. Example 8.1)
          state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

        // End of more-indented block.
        } else if (atMoreIndented) {
          atMoreIndented = false;
          state.result += common.repeat('\n', emptyLines + 1);

        // Just one line break - perceive as the same line.
        } else if (emptyLines === 0) {
          if (didReadContent) { // i.e. only if we have already read some scalar content.
            state.result += ' ';
          }

        // Several line breaks - perceive as different lines.
        } else {
          state.result += common.repeat('\n', emptyLines);
        }

      // Literal style: just add exact number of line breaks between content lines.
      } else {
        // Keep all line breaks except the header line break.
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      }

      didReadContent = true;
      detectedIndent = true;
      emptyLines = 0;
      captureStart = state.position;

      while (!is_EOL(ch) && (ch !== 0)) {
        ch = state.input.charCodeAt(++state.position);
      }

      captureSegment(state, captureStart, state.position, false);
    }

    return true;
  }

  function readBlockSequence(state, nodeIndent) {
    var _line,
        _tag      = state.tag,
        _anchor   = state.anchor,
        _result   = [],
        following,
        detected  = false,
        ch;

    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }

    ch = state.input.charCodeAt(state.position);

    while (ch !== 0) {

      if (ch !== 0x2D/* - */) {
        break;
      }

      following = state.input.charCodeAt(state.position + 1);

      if (!is_WS_OR_EOL(following)) {
        break;
      }

      detected = true;
      state.position++;

      if (skipSeparationSpace(state, true, -1)) {
        if (state.lineIndent <= nodeIndent) {
          _result.push(null);
          ch = state.input.charCodeAt(state.position);
          continue;
        }
      }

      _line = state.line;
      composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
      _result.push(state.result);
      skipSeparationSpace(state, true, -1);

      ch = state.input.charCodeAt(state.position);

      if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
        throwError(state, 'bad indentation of a sequence entry');
      } else if (state.lineIndent < nodeIndent) {
        break;
      }
    }

    if (detected) {
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = 'sequence';
      state.result = _result;
      return true;
    }
    return false;
  }

  function readBlockMapping(state, nodeIndent, flowIndent) {
    var following,
        allowCompact,
        _line,
        _pos,
        _tag          = state.tag,
        _anchor       = state.anchor,
        _result       = {},
        overridableKeys = {},
        keyTag        = null,
        keyNode       = null,
        valueNode     = null,
        atExplicitKey = false,
        detected      = false,
        ch;

    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }

    ch = state.input.charCodeAt(state.position);

    while (ch !== 0) {
      following = state.input.charCodeAt(state.position + 1);
      _line = state.line; // Save the current line.
      _pos = state.position;

      //
      // Explicit notation case. There are two separate blocks:
      // first for the key (denoted by "?") and second for the value (denoted by ":")
      //
      if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

        if (ch === 0x3F/* ? */) {
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = true;
          allowCompact = true;

        } else if (atExplicitKey) {
          // i.e. 0x3A/* : */ === character after the explicit key.
          atExplicitKey = false;
          allowCompact = true;

        } else {
          throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
        }

        state.position += 1;
        ch = following;

      //
      // Implicit notation case. Flow-style node as the key first, then ":", and the value.
      //
      } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

        if (state.line === _line) {
          ch = state.input.charCodeAt(state.position);

          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          if (ch === 0x3A/* : */) {
            ch = state.input.charCodeAt(++state.position);

            if (!is_WS_OR_EOL(ch)) {
              throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
            }

            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }

            detected = true;
            atExplicitKey = false;
            allowCompact = false;
            keyTag = state.tag;
            keyNode = state.result;

          } else if (detected) {
            throwError(state, 'can not read an implicit mapping pair; a colon is missed');

          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true; // Keep the result of `composeNode`.
          }

        } else if (detected) {
          throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else {
        break; // Reading is done. Go to the epilogue.
      }

      //
      // Common reading code for both explicit and implicit notations.
      //
      if (state.line === _line || state.lineIndent > nodeIndent) {
        if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
          if (atExplicitKey) {
            keyNode = state.result;
          } else {
            valueNode = state.result;
          }
        }

        if (!atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
          keyTag = keyNode = valueNode = null;
        }

        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
      }

      if (state.lineIndent > nodeIndent && (ch !== 0)) {
        throwError(state, 'bad indentation of a mapping entry');
      } else if (state.lineIndent < nodeIndent) {
        break;
      }
    }

    //
    // Epilogue.
    //

    // Special case: last mapping's node contains only the key in explicit notation.
    if (atExplicitKey) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
    }

    // Expose the resulting mapping.
    if (detected) {
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = 'mapping';
      state.result = _result;
    }

    return detected;
  }

  function readTagProperty(state) {
    var _position,
        isVerbatim = false,
        isNamed    = false,
        tagHandle,
        tagName,
        ch;

    ch = state.input.charCodeAt(state.position);

    if (ch !== 0x21/* ! */) return false;

    if (state.tag !== null) {
      throwError(state, 'duplication of a tag property');
    }

    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x3C/* < */) {
      isVerbatim = true;
      ch = state.input.charCodeAt(++state.position);

    } else if (ch === 0x21/* ! */) {
      isNamed = true;
      tagHandle = '!!';
      ch = state.input.charCodeAt(++state.position);

    } else {
      tagHandle = '!';
    }

    _position = state.position;

    if (isVerbatim) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (ch !== 0 && ch !== 0x3E/* > */);

      if (state.position < state.length) {
        tagName = state.input.slice(_position, state.position);
        ch = state.input.charCodeAt(++state.position);
      } else {
        throwError(state, 'unexpected end of the stream within a verbatim tag');
      }
    } else {
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {

        if (ch === 0x21/* ! */) {
          if (!isNamed) {
            tagHandle = state.input.slice(_position - 1, state.position + 1);

            if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
              throwError(state, 'named tag handle cannot contain such characters');
            }

            isNamed = true;
            _position = state.position + 1;
          } else {
            throwError(state, 'tag suffix cannot contain exclamation marks');
          }
        }

        ch = state.input.charCodeAt(++state.position);
      }

      tagName = state.input.slice(_position, state.position);

      if (PATTERN_FLOW_INDICATORS.test(tagName)) {
        throwError(state, 'tag suffix cannot contain flow indicator characters');
      }
    }

    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
      throwError(state, 'tag name cannot contain such characters: ' + tagName);
    }

    if (isVerbatim) {
      state.tag = tagName;

    } else if (_hasOwnProperty$2.call(state.tagMap, tagHandle)) {
      state.tag = state.tagMap[tagHandle] + tagName;

    } else if (tagHandle === '!') {
      state.tag = '!' + tagName;

    } else if (tagHandle === '!!') {
      state.tag = 'tag:yaml.org,2002:' + tagName;

    } else {
      throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }

    return true;
  }

  function readAnchorProperty(state) {
    var _position,
        ch;

    ch = state.input.charCodeAt(state.position);

    if (ch !== 0x26/* & */) return false;

    if (state.anchor !== null) {
      throwError(state, 'duplication of an anchor property');
    }

    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (state.position === _position) {
      throwError(state, 'name of an anchor node must contain at least one character');
    }

    state.anchor = state.input.slice(_position, state.position);
    return true;
  }

  function readAlias(state) {
    var _position, alias,
        ch;

    ch = state.input.charCodeAt(state.position);

    if (ch !== 0x2A/* * */) return false;

    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (state.position === _position) {
      throwError(state, 'name of an alias node must contain at least one character');
    }

    alias = state.input.slice(_position, state.position);

    if (!state.anchorMap.hasOwnProperty(alias)) {
      throwError(state, 'unidentified alias "' + alias + '"');
    }

    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
  }

  function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles,
        allowBlockScalars,
        allowBlockCollections,
        indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
        atNewLine  = false,
        hasContent = false,
        typeIndex,
        typeQuantity,
        type,
        flowIndent,
        blockIndent;

    if (state.listener !== null) {
      state.listener('open', state);
    }

    state.tag    = null;
    state.anchor = null;
    state.kind   = null;
    state.result = null;

    allowBlockStyles = allowBlockScalars = allowBlockCollections =
      CONTEXT_BLOCK_OUT === nodeContext ||
      CONTEXT_BLOCK_IN  === nodeContext;

    if (allowToSeek) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      }
    }

    if (indentStatus === 1) {
      while (readTagProperty(state) || readAnchorProperty(state)) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          allowBlockCollections = allowBlockStyles;

          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        } else {
          allowBlockCollections = false;
        }
      }
    }

    if (allowBlockCollections) {
      allowBlockCollections = atNewLine || allowCompact;
    }

    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
      if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
        flowIndent = parentIndent;
      } else {
        flowIndent = parentIndent + 1;
      }

      blockIndent = state.position - state.lineStart;

      if (indentStatus === 1) {
        if (allowBlockCollections &&
            (readBlockSequence(state, blockIndent) ||
             readBlockMapping(state, blockIndent, flowIndent)) ||
            readFlowCollection(state, flowIndent)) {
          hasContent = true;
        } else {
          if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
              readSingleQuotedScalar(state, flowIndent) ||
              readDoubleQuotedScalar(state, flowIndent)) {
            hasContent = true;

          } else if (readAlias(state)) {
            hasContent = true;

            if (state.tag !== null || state.anchor !== null) {
              throwError(state, 'alias node should not have any properties');
            }

          } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
            hasContent = true;

            if (state.tag === null) {
              state.tag = '?';
            }
          }

          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        }
      } else if (indentStatus === 0) {
        // Special case: block sequences are allowed to have same indentation level as the parent.
        // http://www.yaml.org/spec/1.2/spec.html#id2799784
        hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
      }
    }

    if (state.tag !== null && state.tag !== '!') {
      if (state.tag === '?') {
        for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
          type = state.implicitTypes[typeIndex];

          // Implicit resolving is not allowed for non-scalar types, and '?'
          // non-specific tag is only assigned to plain scalars. So, it isn't
          // needed to check for 'kind' conformity.

          if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
            state.result = type.construct(state.result);
            state.tag = type.tag;
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
            break;
          }
        }
      } else if (_hasOwnProperty$2.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
        type = state.typeMap[state.kind || 'fallback'][state.tag];

        if (state.result !== null && type.kind !== state.kind) {
          throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
        }

        if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
          throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
        } else {
          state.result = type.construct(state.result);
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        }
      } else {
        throwError(state, 'unknown tag !<' + state.tag + '>');
      }
    }

    if (state.listener !== null) {
      state.listener('close', state);
    }
    return state.tag !== null ||  state.anchor !== null || hasContent;
  }

  function readDocument(state) {
    var documentStart = state.position,
        _position,
        directiveName,
        directiveArgs,
        hasDirectives = false,
        ch;

    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = {};
    state.anchorMap = {};

    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      skipSeparationSpace(state, true, -1);

      ch = state.input.charCodeAt(state.position);

      if (state.lineIndent > 0 || ch !== 0x25/* % */) {
        break;
      }

      hasDirectives = true;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveName = state.input.slice(_position, state.position);
      directiveArgs = [];

      if (directiveName.length < 1) {
        throwError(state, 'directive name must not be less than one character in length');
      }

      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x23/* # */) {
          do { ch = state.input.charCodeAt(++state.position); }
          while (ch !== 0 && !is_EOL(ch));
          break;
        }

        if (is_EOL(ch)) break;

        _position = state.position;

        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        directiveArgs.push(state.input.slice(_position, state.position));
      }

      if (ch !== 0) readLineBreak(state);

      if (_hasOwnProperty$2.call(directiveHandlers, directiveName)) {
        directiveHandlers[directiveName](state, directiveName, directiveArgs);
      } else {
        throwWarning(state, 'unknown document directive "' + directiveName + '"');
      }
    }

    skipSeparationSpace(state, true, -1);

    if (state.lineIndent === 0 &&
        state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
        state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
        state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);

    } else if (hasDirectives) {
      throwError(state, 'directives end mark is expected');
    }

    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);

    if (state.checkLineBreaks &&
        PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
      throwWarning(state, 'non-ASCII line breaks are interpreted as content');
    }

    state.documents.push(state.result);

    if (state.position === state.lineStart && testDocumentSeparator(state)) {

      if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      }
      return;
    }

    if (state.position < (state.length - 1)) {
      throwError(state, 'end of the stream or a document separator is expected');
    } else {
      return;
    }
  }


  function loadDocuments(input, options) {
    input = String(input);
    options = options || {};

    if (input.length !== 0) {

      // Add tailing `\n` if not exists
      if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
          input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
        input += '\n';
      }

      // Strip BOM
      if (input.charCodeAt(0) === 0xFEFF) {
        input = input.slice(1);
      }
    }

    var state = new State(input, options);

    // Use 0 as string terminator. That significantly simplifies bounds check.
    state.input += '\0';

    while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
      state.lineIndent += 1;
      state.position += 1;
    }

    while (state.position < (state.length - 1)) {
      readDocument(state);
    }

    return state.documents;
  }


  function loadAll(input, iterator, options) {
    var documents = loadDocuments(input, options), index, length;

    if (typeof iterator !== 'function') {
      return documents;
    }

    for (index = 0, length = documents.length; index < length; index += 1) {
      iterator(documents[index]);
    }
  }


  function load(input, options) {
    var documents = loadDocuments(input, options);

    if (documents.length === 0) {
      /*eslint-disable no-undefined*/
      return undefined;
    } else if (documents.length === 1) {
      return documents[0];
    }
    throw new exception('expected a single document in the stream, but found more');
  }


  function safeLoadAll(input, output, options) {
    if (typeof output === 'function') {
      loadAll(input, output, common.extend({ schema: default_safe }, options));
    } else {
      return loadAll(input, common.extend({ schema: default_safe }, options));
    }
  }


  function safeLoad(input, options) {
    return load(input, common.extend({ schema: default_safe }, options));
  }


  var loadAll_1     = loadAll;
  var load_1        = load;
  var safeLoadAll_1 = safeLoadAll;
  var safeLoad_1    = safeLoad;

  var loader = {
  	loadAll: loadAll_1,
  	load: load_1,
  	safeLoadAll: safeLoadAll_1,
  	safeLoad: safeLoad_1
  };

  /*eslint-disable no-use-before-define*/






  var _toString$2       = Object.prototype.toString;
  var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;

  var CHAR_TAB                  = 0x09; /* Tab */
  var CHAR_LINE_FEED            = 0x0A; /* LF */
  var CHAR_SPACE                = 0x20; /* Space */
  var CHAR_EXCLAMATION          = 0x21; /* ! */
  var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
  var CHAR_SHARP                = 0x23; /* # */
  var CHAR_PERCENT              = 0x25; /* % */
  var CHAR_AMPERSAND            = 0x26; /* & */
  var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
  var CHAR_ASTERISK             = 0x2A; /* * */
  var CHAR_COMMA                = 0x2C; /* , */
  var CHAR_MINUS                = 0x2D; /* - */
  var CHAR_COLON                = 0x3A; /* : */
  var CHAR_GREATER_THAN         = 0x3E; /* > */
  var CHAR_QUESTION             = 0x3F; /* ? */
  var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
  var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
  var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
  var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
  var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
  var CHAR_VERTICAL_LINE        = 0x7C; /* | */
  var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

  var ESCAPE_SEQUENCES = {};

  ESCAPE_SEQUENCES[0x00]   = '\\0';
  ESCAPE_SEQUENCES[0x07]   = '\\a';
  ESCAPE_SEQUENCES[0x08]   = '\\b';
  ESCAPE_SEQUENCES[0x09]   = '\\t';
  ESCAPE_SEQUENCES[0x0A]   = '\\n';
  ESCAPE_SEQUENCES[0x0B]   = '\\v';
  ESCAPE_SEQUENCES[0x0C]   = '\\f';
  ESCAPE_SEQUENCES[0x0D]   = '\\r';
  ESCAPE_SEQUENCES[0x1B]   = '\\e';
  ESCAPE_SEQUENCES[0x22]   = '\\"';
  ESCAPE_SEQUENCES[0x5C]   = '\\\\';
  ESCAPE_SEQUENCES[0x85]   = '\\N';
  ESCAPE_SEQUENCES[0xA0]   = '\\_';
  ESCAPE_SEQUENCES[0x2028] = '\\L';
  ESCAPE_SEQUENCES[0x2029] = '\\P';

  var DEPRECATED_BOOLEANS_SYNTAX = [
    'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
    'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
  ];

  function compileStyleMap(schema, map) {
    var result, keys, index, length, tag, style, type;

    if (map === null) return {};

    result = {};
    keys = Object.keys(map);

    for (index = 0, length = keys.length; index < length; index += 1) {
      tag = keys[index];
      style = String(map[tag]);

      if (tag.slice(0, 2) === '!!') {
        tag = 'tag:yaml.org,2002:' + tag.slice(2);
      }
      type = schema.compiledTypeMap['fallback'][tag];

      if (type && _hasOwnProperty$3.call(type.styleAliases, style)) {
        style = type.styleAliases[style];
      }

      result[tag] = style;
    }

    return result;
  }

  function encodeHex(character) {
    var string, handle, length;

    string = character.toString(16).toUpperCase();

    if (character <= 0xFF) {
      handle = 'x';
      length = 2;
    } else if (character <= 0xFFFF) {
      handle = 'u';
      length = 4;
    } else if (character <= 0xFFFFFFFF) {
      handle = 'U';
      length = 8;
    } else {
      throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
    }

    return '\\' + handle + common.repeat('0', length - string.length) + string;
  }

  function State$1(options) {
    this.schema        = options['schema'] || default_full;
    this.indent        = Math.max(1, (options['indent'] || 2));
    this.noArrayIndent = options['noArrayIndent'] || false;
    this.skipInvalid   = options['skipInvalid'] || false;
    this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
    this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
    this.sortKeys      = options['sortKeys'] || false;
    this.lineWidth     = options['lineWidth'] || 80;
    this.noRefs        = options['noRefs'] || false;
    this.noCompatMode  = options['noCompatMode'] || false;
    this.condenseFlow  = options['condenseFlow'] || false;

    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;

    this.tag = null;
    this.result = '';

    this.duplicates = [];
    this.usedDuplicates = null;
  }

  // Indents every line in a string. Empty lines (\n only) are not indented.
  function indentString(string, spaces) {
    var ind = common.repeat(' ', spaces),
        position = 0,
        next = -1,
        result = '',
        line,
        length = string.length;

    while (position < length) {
      next = string.indexOf('\n', position);
      if (next === -1) {
        line = string.slice(position);
        position = length;
      } else {
        line = string.slice(position, next + 1);
        position = next + 1;
      }

      if (line.length && line !== '\n') result += ind;

      result += line;
    }

    return result;
  }

  function generateNextLine(state, level) {
    return '\n' + common.repeat(' ', state.indent * level);
  }

  function testImplicitResolving(state, str) {
    var index, length, type;

    for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
      type = state.implicitTypes[index];

      if (type.resolve(str)) {
        return true;
      }
    }

    return false;
  }

  // [33] s-white ::= s-space | s-tab
  function isWhitespace(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
  }

  // Returns true if the character can be printed without escaping.
  // From YAML 1.2: "any allowed characters known to be non-printable
  // should also be escaped. [However,] This isn’t mandatory"
  // Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
  function isPrintable(c) {
    return  (0x00020 <= c && c <= 0x00007E)
        || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
        || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
        ||  (0x10000 <= c && c <= 0x10FFFF);
  }

  // Simplified test for values allowed after the first character in plain style.
  function isPlainSafe(c) {
    // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
    // where nb-char ::= c-printable - b-char - c-byte-order-mark.
    return isPrintable(c) && c !== 0xFEFF
      // - c-flow-indicator
      && c !== CHAR_COMMA
      && c !== CHAR_LEFT_SQUARE_BRACKET
      && c !== CHAR_RIGHT_SQUARE_BRACKET
      && c !== CHAR_LEFT_CURLY_BRACKET
      && c !== CHAR_RIGHT_CURLY_BRACKET
      // - ":" - "#"
      && c !== CHAR_COLON
      && c !== CHAR_SHARP;
  }

  // Simplified test for values allowed as the first character in plain style.
  function isPlainSafeFirst(c) {
    // Uses a subset of ns-char - c-indicator
    // where ns-char = nb-char - s-white.
    return isPrintable(c) && c !== 0xFEFF
      && !isWhitespace(c) // - s-white
      // - (c-indicator ::=
      // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
      && c !== CHAR_MINUS
      && c !== CHAR_QUESTION
      && c !== CHAR_COLON
      && c !== CHAR_COMMA
      && c !== CHAR_LEFT_SQUARE_BRACKET
      && c !== CHAR_RIGHT_SQUARE_BRACKET
      && c !== CHAR_LEFT_CURLY_BRACKET
      && c !== CHAR_RIGHT_CURLY_BRACKET
      // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
      && c !== CHAR_SHARP
      && c !== CHAR_AMPERSAND
      && c !== CHAR_ASTERISK
      && c !== CHAR_EXCLAMATION
      && c !== CHAR_VERTICAL_LINE
      && c !== CHAR_GREATER_THAN
      && c !== CHAR_SINGLE_QUOTE
      && c !== CHAR_DOUBLE_QUOTE
      // | “%” | “@” | “`”)
      && c !== CHAR_PERCENT
      && c !== CHAR_COMMERCIAL_AT
      && c !== CHAR_GRAVE_ACCENT;
  }

  // Determines whether block indentation indicator is required.
  function needIndentIndicator(string) {
    var leadingSpaceRe = /^\n* /;
    return leadingSpaceRe.test(string);
  }

  var STYLE_PLAIN   = 1,
      STYLE_SINGLE  = 2,
      STYLE_LITERAL = 3,
      STYLE_FOLDED  = 4,
      STYLE_DOUBLE  = 5;

  // Determines which scalar styles are possible and returns the preferred style.
  // lineWidth = -1 => no limit.
  // Pre-conditions: str.length > 0.
  // Post-conditions:
  //    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
  //    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
  //    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
  function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
    var i;
    var char;
    var hasLineBreak = false;
    var hasFoldableLine = false; // only checked if shouldTrackWidth
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1; // count the first line correctly
    var plain = isPlainSafeFirst(string.charCodeAt(0))
            && !isWhitespace(string.charCodeAt(string.length - 1));

    if (singleLineOnly) {
      // Case: no block styles.
      // Check for disallowed characters to rule out plain and single.
      for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        if (!isPrintable(char)) {
          return STYLE_DOUBLE;
        }
        plain = plain && isPlainSafe(char);
      }
    } else {
      // Case: block styles permitted.
      for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        if (char === CHAR_LINE_FEED) {
          hasLineBreak = true;
          // Check if any line can be folded.
          if (shouldTrackWidth) {
            hasFoldableLine = hasFoldableLine ||
              // Foldable line = too long, and not more-indented.
              (i - previousLineBreak - 1 > lineWidth &&
               string[previousLineBreak + 1] !== ' ');
            previousLineBreak = i;
          }
        } else if (!isPrintable(char)) {
          return STYLE_DOUBLE;
        }
        plain = plain && isPlainSafe(char);
      }
      // in case the end is missing a \n
      hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
        (i - previousLineBreak - 1 > lineWidth &&
         string[previousLineBreak + 1] !== ' '));
    }
    // Although every style can represent \n without escaping, prefer block styles
    // for multiline, since they're more readable and they don't add empty lines.
    // Also prefer folding a super-long line.
    if (!hasLineBreak && !hasFoldableLine) {
      // Strings interpretable as another type have to be quoted;
      // e.g. the string 'true' vs. the boolean true.
      return plain && !testAmbiguousType(string)
        ? STYLE_PLAIN : STYLE_SINGLE;
    }
    // Edge case: block indentation indicator can only have one digit.
    if (indentPerLevel > 9 && needIndentIndicator(string)) {
      return STYLE_DOUBLE;
    }
    // At this point we know block styles are valid.
    // Prefer literal style unless we want to fold.
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }

  // Note: line breaking/folding is implemented for only the folded style.
  // NB. We drop the last trailing newline (if any) of a returned block scalar
  //  since the dumper adds its own newline. This always works:
  //    • No ending newline => unaffected; already using strip "-" chomping.
  //    • Ending newline    => removed then restored.
  //  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
  function writeScalar(state, string, level, iskey) {
    state.dump = (function () {
      if (string.length === 0) {
        return "''";
      }
      if (!state.noCompatMode &&
          DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
        return "'" + string + "'";
      }

      var indent = state.indent * Math.max(1, level); // no 0-indent scalars
      // As indentation gets deeper, let the width decrease monotonically
      // to the lower bound min(state.lineWidth, 40).
      // Note that this implies
      //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
      //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
      // This behaves better than a constant minimum width which disallows narrower options,
      // or an indent threshold which causes the width to suddenly increase.
      var lineWidth = state.lineWidth === -1
        ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

      // Without knowing if keys are implicit/explicit, assume implicit for safety.
      var singleLineOnly = iskey
        // No block styles in flow mode.
        || (state.flowLevel > -1 && level >= state.flowLevel);
      function testAmbiguity(string) {
        return testImplicitResolving(state, string);
      }

      switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
        case STYLE_PLAIN:
          return string;
        case STYLE_SINGLE:
          return "'" + string.replace(/'/g, "''") + "'";
        case STYLE_LITERAL:
          return '|' + blockHeader(string, state.indent)
            + dropEndingNewline(indentString(string, indent));
        case STYLE_FOLDED:
          return '>' + blockHeader(string, state.indent)
            + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
        case STYLE_DOUBLE:
          return '"' + escapeString(string) + '"';
        default:
          throw new exception('impossible error: invalid scalar style');
      }
    }());
  }

  // Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
  function blockHeader(string, indentPerLevel) {
    var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

    // note the special case: the string '\n' counts as a "trailing" empty line.
    var clip =          string[string.length - 1] === '\n';
    var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
    var chomp = keep ? '+' : (clip ? '' : '-');

    return indentIndicator + chomp + '\n';
  }

  // (See the note for writeScalar.)
  function dropEndingNewline(string) {
    return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
  }

  // Note: a long line without a suitable break point will exceed the width limit.
  // Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
  function foldString(string, width) {
    // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
    // unless they're before or after a more-indented line, or at the very
    // beginning or end, in which case $k$ maps to $k$.
    // Therefore, parse each chunk as newline(s) followed by a content line.
    var lineRe = /(\n+)([^\n]*)/g;

    // first line (possibly an empty line)
    var result = (function () {
      var nextLF = string.indexOf('\n');
      nextLF = nextLF !== -1 ? nextLF : string.length;
      lineRe.lastIndex = nextLF;
      return foldLine(string.slice(0, nextLF), width);
    }());
    // If we haven't reached the first content line yet, don't add an extra \n.
    var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
    var moreIndented;

    // rest of the lines
    var match;
    while ((match = lineRe.exec(string))) {
      var prefix = match[1], line = match[2];
      moreIndented = (line[0] === ' ');
      result += prefix
        + (!prevMoreIndented && !moreIndented && line !== ''
          ? '\n' : '')
        + foldLine(line, width);
      prevMoreIndented = moreIndented;
    }

    return result;
  }

  // Greedy line breaking.
  // Picks the longest line under the limit each time,
  // otherwise settles for the shortest line over the limit.
  // NB. More-indented lines *cannot* be folded, as that would add an extra \n.
  function foldLine(line, width) {
    if (line === '' || line[0] === ' ') return line;

    // Since a more-indented line adds a \n, breaks can't be followed by a space.
    var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
    var match;
    // start is an inclusive index. end, curr, and next are exclusive.
    var start = 0, end, curr = 0, next = 0;
    var result = '';

    // Invariants: 0 <= start <= length-1.
    //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
    // Inside the loop:
    //   A match implies length >= 2, so curr and next are <= length-2.
    while ((match = breakRe.exec(line))) {
      next = match.index;
      // maintain invariant: curr - start <= width
      if (next - start > width) {
        end = (curr > start) ? curr : next; // derive end <= length-2
        result += '\n' + line.slice(start, end);
        // skip the space that was output as \n
        start = end + 1;                    // derive start <= length-1
      }
      curr = next;
    }

    // By the invariants, start <= length-1, so there is something left over.
    // It is either the whole string or a part starting from non-whitespace.
    result += '\n';
    // Insert a break if the remainder is too long and there is a break available.
    if (line.length - start > width && curr > start) {
      result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
    } else {
      result += line.slice(start);
    }

    return result.slice(1); // drop extra \n joiner
  }

  // Escapes a double-quoted string.
  function escapeString(string) {
    var result = '';
    var char, nextChar;
    var escapeSeq;

    for (var i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
      if (char >= 0xD800 && char <= 0xDBFF/* high surrogate */) {
        nextChar = string.charCodeAt(i + 1);
        if (nextChar >= 0xDC00 && nextChar <= 0xDFFF/* low surrogate */) {
          // Combine the surrogate pair and store it escaped.
          result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
          // Advance index one extra since we already used that char here.
          i++; continue;
        }
      }
      escapeSeq = ESCAPE_SEQUENCES[char];
      result += !escapeSeq && isPrintable(char)
        ? string[i]
        : escapeSeq || encodeHex(char);
    }

    return result;
  }

  function writeFlowSequence(state, level, object) {
    var _result = '',
        _tag    = state.tag,
        index,
        length;

    for (index = 0, length = object.length; index < length; index += 1) {
      // Write only valid elements.
      if (writeNode(state, level, object[index], false, false)) {
        if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
        _result += state.dump;
      }
    }

    state.tag = _tag;
    state.dump = '[' + _result + ']';
  }

  function writeBlockSequence(state, level, object, compact) {
    var _result = '',
        _tag    = state.tag,
        index,
        length;

    for (index = 0, length = object.length; index < length; index += 1) {
      // Write only valid elements.
      if (writeNode(state, level + 1, object[index], true, true)) {
        if (!compact || index !== 0) {
          _result += generateNextLine(state, level);
        }

        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          _result += '-';
        } else {
          _result += '- ';
        }

        _result += state.dump;
      }
    }

    state.tag = _tag;
    state.dump = _result || '[]'; // Empty sequence if no valid values.
  }

  function writeFlowMapping(state, level, object) {
    var _result       = '',
        _tag          = state.tag,
        objectKeyList = Object.keys(object),
        index,
        length,
        objectKey,
        objectValue,
        pairBuffer;

    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
      pairBuffer = state.condenseFlow ? '"' : '';

      if (index !== 0) pairBuffer += ', ';

      objectKey = objectKeyList[index];
      objectValue = object[objectKey];

      if (!writeNode(state, level, objectKey, false, false)) {
        continue; // Skip this pair because of invalid key;
      }

      if (state.dump.length > 1024) pairBuffer += '? ';

      pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

      if (!writeNode(state, level, objectValue, false, false)) {
        continue; // Skip this pair because of invalid value.
      }

      pairBuffer += state.dump;

      // Both key and value are valid.
      _result += pairBuffer;
    }

    state.tag = _tag;
    state.dump = '{' + _result + '}';
  }

  function writeBlockMapping(state, level, object, compact) {
    var _result       = '',
        _tag          = state.tag,
        objectKeyList = Object.keys(object),
        index,
        length,
        objectKey,
        objectValue,
        explicitPair,
        pairBuffer;

    // Allow sorting keys so that the output file is deterministic
    if (state.sortKeys === true) {
      // Default sorting
      objectKeyList.sort();
    } else if (typeof state.sortKeys === 'function') {
      // Custom sort function
      objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
      // Something is wrong
      throw new exception('sortKeys must be a boolean or a function');
    }

    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
      pairBuffer = '';

      if (!compact || index !== 0) {
        pairBuffer += generateNextLine(state, level);
      }

      objectKey = objectKeyList[index];
      objectValue = object[objectKey];

      if (!writeNode(state, level + 1, objectKey, true, true, true)) {
        continue; // Skip this pair because of invalid key.
      }

      explicitPair = (state.tag !== null && state.tag !== '?') ||
                     (state.dump && state.dump.length > 1024);

      if (explicitPair) {
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += '?';
        } else {
          pairBuffer += '? ';
        }
      }

      pairBuffer += state.dump;

      if (explicitPair) {
        pairBuffer += generateNextLine(state, level);
      }

      if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
        continue; // Skip this pair because of invalid value.
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += ':';
      } else {
        pairBuffer += ': ';
      }

      pairBuffer += state.dump;

      // Both key and value are valid.
      _result += pairBuffer;
    }

    state.tag = _tag;
    state.dump = _result || '{}'; // Empty mapping if no valid pairs.
  }

  function detectType(state, object, explicit) {
    var _result, typeList, index, length, type, style;

    typeList = explicit ? state.explicitTypes : state.implicitTypes;

    for (index = 0, length = typeList.length; index < length; index += 1) {
      type = typeList[index];

      if ((type.instanceOf  || type.predicate) &&
          (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
          (!type.predicate  || type.predicate(object))) {

        state.tag = explicit ? type.tag : '?';

        if (type.represent) {
          style = state.styleMap[type.tag] || type.defaultStyle;

          if (_toString$2.call(type.represent) === '[object Function]') {
            _result = type.represent(object, style);
          } else if (_hasOwnProperty$3.call(type.represent, style)) {
            _result = type.represent[style](object, style);
          } else {
            throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
          }

          state.dump = _result;
        }

        return true;
      }
    }

    return false;
  }

  // Serializes `object` and writes it to global `result`.
  // Returns true on success, or false on invalid object.
  //
  function writeNode(state, level, object, block, compact, iskey) {
    state.tag = null;
    state.dump = object;

    if (!detectType(state, object, false)) {
      detectType(state, object, true);
    }

    var type = _toString$2.call(state.dump);

    if (block) {
      block = (state.flowLevel < 0 || state.flowLevel > level);
    }

    var objectOrArray = type === '[object Object]' || type === '[object Array]',
        duplicateIndex,
        duplicate;

    if (objectOrArray) {
      duplicateIndex = state.duplicates.indexOf(object);
      duplicate = duplicateIndex !== -1;
    }

    if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
      compact = false;
    }

    if (duplicate && state.usedDuplicates[duplicateIndex]) {
      state.dump = '*ref_' + duplicateIndex;
    } else {
      if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
        state.usedDuplicates[duplicateIndex] = true;
      }
      if (type === '[object Object]') {
        if (block && (Object.keys(state.dump).length !== 0)) {
          writeBlockMapping(state, level, state.dump, compact);
          if (duplicate) {
            state.dump = '&ref_' + duplicateIndex + state.dump;
          }
        } else {
          writeFlowMapping(state, level, state.dump);
          if (duplicate) {
            state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
          }
        }
      } else if (type === '[object Array]') {
        var arrayLevel = (state.noArrayIndent && (level > 0)) ? level - 1 : level;
        if (block && (state.dump.length !== 0)) {
          writeBlockSequence(state, arrayLevel, state.dump, compact);
          if (duplicate) {
            state.dump = '&ref_' + duplicateIndex + state.dump;
          }
        } else {
          writeFlowSequence(state, arrayLevel, state.dump);
          if (duplicate) {
            state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
          }
        }
      } else if (type === '[object String]') {
        if (state.tag !== '?') {
          writeScalar(state, state.dump, level, iskey);
        }
      } else {
        if (state.skipInvalid) return false;
        throw new exception('unacceptable kind of an object to dump ' + type);
      }

      if (state.tag !== null && state.tag !== '?') {
        state.dump = '!<' + state.tag + '> ' + state.dump;
      }
    }

    return true;
  }

  function getDuplicateReferences(object, state) {
    var objects = [],
        duplicatesIndexes = [],
        index,
        length;

    inspectNode(object, objects, duplicatesIndexes);

    for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
      state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
  }

  function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList,
        index,
        length;

    if (object !== null && typeof object === 'object') {
      index = objects.indexOf(object);
      if (index !== -1) {
        if (duplicatesIndexes.indexOf(index) === -1) {
          duplicatesIndexes.push(index);
        }
      } else {
        objects.push(object);

        if (Array.isArray(object)) {
          for (index = 0, length = object.length; index < length; index += 1) {
            inspectNode(object[index], objects, duplicatesIndexes);
          }
        } else {
          objectKeyList = Object.keys(object);

          for (index = 0, length = objectKeyList.length; index < length; index += 1) {
            inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
          }
        }
      }
    }
  }

  function dump(input, options) {
    options = options || {};

    var state = new State$1(options);

    if (!state.noRefs) getDuplicateReferences(input, state);

    if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

    return '';
  }

  function safeDump(input, options) {
    return dump(input, common.extend({ schema: default_safe }, options));
  }

  var dump_1     = dump;
  var safeDump_1 = safeDump;

  var dumper = {
  	dump: dump_1,
  	safeDump: safeDump_1
  };

  function deprecated(name) {
    return function () {
      throw new Error('Function ' + name + ' is deprecated and cannot be used.');
    };
  }


  var Type$1                = type;
  var Schema$1              = schema;
  var FAILSAFE_SCHEMA     = failsafe;
  var JSON_SCHEMA         = json;
  var CORE_SCHEMA         = core;
  var DEFAULT_SAFE_SCHEMA = default_safe;
  var DEFAULT_FULL_SCHEMA = default_full;
  var load$1                = loader.load;
  var loadAll$1             = loader.loadAll;
  var safeLoad$1            = loader.safeLoad;
  var safeLoadAll$1         = loader.safeLoadAll;
  var dump$1                = dumper.dump;
  var safeDump$1            = dumper.safeDump;
  var YAMLException$1       = exception;

  // Deprecated schema names from JS-YAML 2.0.x
  var MINIMAL_SCHEMA = failsafe;
  var SAFE_SCHEMA    = default_safe;
  var DEFAULT_SCHEMA = default_full;

  // Deprecated functions from JS-YAML 1.x.x
  var scan           = deprecated('scan');
  var parse          = deprecated('parse');
  var compose        = deprecated('compose');
  var addConstructor = deprecated('addConstructor');

  var jsYaml = {
  	Type: Type$1,
  	Schema: Schema$1,
  	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
  	JSON_SCHEMA: JSON_SCHEMA,
  	CORE_SCHEMA: CORE_SCHEMA,
  	DEFAULT_SAFE_SCHEMA: DEFAULT_SAFE_SCHEMA,
  	DEFAULT_FULL_SCHEMA: DEFAULT_FULL_SCHEMA,
  	load: load$1,
  	loadAll: loadAll$1,
  	safeLoad: safeLoad$1,
  	safeLoadAll: safeLoadAll$1,
  	dump: dump$1,
  	safeDump: safeDump$1,
  	YAMLException: YAMLException$1,
  	MINIMAL_SCHEMA: MINIMAL_SCHEMA,
  	SAFE_SCHEMA: SAFE_SCHEMA,
  	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
  	scan: scan,
  	parse: parse,
  	compose: compose,
  	addConstructor: addConstructor
  };

  var jsYaml$1 = jsYaml;

  var fuse = createCommonjsModule(function (module, exports) {
  /*!
   * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
   * 
   * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
   * All Rights Reserved. Apache Software License 2.0
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   */
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)};},function(e,t,n){function r(e){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t);}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return {tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return {weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name;}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});}return {weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]));}L&&(k+=1);}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m);}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]));}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f});}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l);}t[n].score=1===s?a:s,this._log(t[n]);}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn);}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t);}return t})),n=null;}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a);}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score;});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c);}else t.push(s.item);}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments);}}])&&o(t.prototype,n),e}();e.exports=c;},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern));}var t,n;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return {isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),e}();e.exports=s;},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1]);}return {score:a?.5:1,isMatch:a,matchedIndices:s}};},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m);}}k=-1;for(var L=[],w=1,A=S+y,C=1<<S-1,I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O);}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k);}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T;}return {isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}};},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l};},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1);}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n};},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t};},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString());}else o.push(t);return o}(e,t,[])};}])});
  });

  var Fuse = unwrapExports(fuse);
  var fuse_1 = fuse.Fuse;

  var rul;
  var Search = /** @class */ (function () {
      function Search() {
          console.log(Fuse);
          this.lang = new Fuse(rul.langList, {
              keys: ["id", "text"],
              tokenize: true,
              matchAllTokens: true,
              distance: 0,
              threshold: 0
          });
          this.articles = new Fuse(rul.articles, {
              keys: ["id", "title", "text"],
              tokenize: true,
              matchAllTokens: true,
              distance: 0,
              threshold: 0
          });
      }
      Search.prototype.find = function (query) {
          return this.lang.search(query);
      };
      Search.prototype.findArticles = function (query) {
          return this.articles.search(query);
      };
      return Search;
  }());
  var PediaArticle = /** @class */ (function () {
      function PediaArticle(raw) {
          this.id = raw.id;
          this.title = rul.lang[raw.title || raw.id];
          this.text = rul.lang[raw.text] || rul.lang[raw.id + "_UFOPEDIA"];
          this.image_id = raw.image_id;
          this.type_id = raw.type_id;
          if (raw.section) {
              if (!(raw.section in rul.sections)) {
                  rul.sections[raw.section] = new PediaSection(raw.section);
              }
              rul.sections[raw.section].add(this);
          }
      }
      return PediaArticle;
  }());
  var PediaSection = /** @class */ (function () {
      function PediaSection(id) {
          this.id = id;
          this.articles = [];
          rul.sections[id] = this;
          rul.sectionsOrder.push(this);
          this.title = rul.lang[id];
      }
      PediaSection.prototype.add = function (article) {
          this.articles.push(article);
          article.section = this;
      };
      return PediaSection;
  }());
  var Sprite = /** @class */ (function () {
      function Sprite(raw) {
          this.id = raw.type || raw.typeSingle;
          if (raw.files) {
              this.path = raw.files[0];
              this.extra = raw.files;
          }
          if (raw.fileSingle)
              this.path = raw.fileSingle;
      }
      return Sprite;
  }());
  var Armor = /** @class */ (function () {
      function Armor(raw) {
          var old = rul.armors[raw.type];
          if (old)
              Object.assign(this, old);
          Object.assign(this, raw);
          rul.armors[raw.type] = this;
      }
      return Armor;
  }());
  var Item = /** @class */ (function () {
      function Item(raw) {
          var old = rul.items[raw.type];
          if (old)
              Object.assign(this, old);
          Object.assign(this, raw);
          rul.items[raw.type] = this;
          this.sprite = rul.bigSprite[this.bigSprite];
          var t = this;
          if ("flatThrow" in t) {
              t.flatThrowTime = t.flatThrow.time;
              delete t.flatThrow;
          }
          if ("confAuto" in t) {
              t.autoName = rul.lang[t.confAuto.name];
              t.autoShots = t.confAuto.shots;
              delete t.confAuto;
          }
      }
      Item.prototype.damageTypeName = function () {
          return rul.lang[rul.damageTypes[this.damageType]];
      };
      return Item;
  }());
  var Ruleset = /** @class */ (function () {
      function Ruleset(data) {
          this.lang = {};
          this.langList = [];
          this.articlesById = {};
          this.spritesById = {};
          this.raw = {};
          this.articles = [];
          this.sections = {};
          this.sectionsOrder = [];
          this.items = {};
          this.armors = {};
          this.bigSprite = [];
          this.floorSprite = [];
          this.handSprite = [];
          this.sounds = [];
          this.damageTypes = [
              "STR_DAMAGE_NONE",
              "STR_DAMAGE_ARMOR_PIERCING",
              "STR_DAMAGE_INCENDIARY",
              "STR_DAMAGE_HIGH_EXPLOSIVE",
              "STR_DAMAGE_LASER_BEAM",
              "STR_DAMAGE_PLASMA_BEAM",
              "STR_DAMAGE_STUN",
              "STR_DAMAGE_MELEE",
              "STR_DAMAGE_ACID",
              "STR_DAMAGE_SMOKE",
              "STR_DAMAGE_10",
              "STR_DAMAGE_11",
              "STR_DAMAGE_12",
              "STR_DAMAGE_13",
              "STR_DAMAGE_14",
              "STR_DAMAGE_15",
              "STR_DAMAGE_16",
              "STR_DAMAGE_17"
          ];
          rul = this;
          this.parse(data);
      }
      Ruleset.prototype.sound = function (id) {
          return this.path + this.sounds[id];
      };
      Ruleset.prototype.str = function (id) {
          return this.lang[id] || id;
      };
      Ruleset.prototype.specialSprite = function (type, num) {
          return num in this[type] ? this.path + this[type][num] : "0.png";
      };
      Ruleset.prototype.parse = function (data) {
          for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
              var file = data_1[_i];
              for (var key in file) {
                  if (key.substr(0, 4) == "lang") {
                      Object.assign(this.lang, file[key]);
                  }
                  if (!(key in this.raw)) {
                      this.raw[key] = file[key];
                  }
                  else {
                      var old = this.raw[key];
                      var adding = file[key];
                      if (old.concat) {
                          this.raw[key] = old.concat(adding);
                      }
                      else {
                          for (var _a = 0, adding_1 = adding; _a < adding_1.length; _a++) {
                              var k = adding_1[_a];
                              if (k in old)
                                  Object.assign(old[k], adding[k]);
                              else
                                  old[k] = adding[k];
                          }
                      }
                  }
              }
          }
          this.modName = this.raw.modName;
          this.path = "user/mods/" + rul.modName + "/";
          for (var k in this.lang) {
              var text = this.lang[k];
              if (typeof text === "string") {
                  text = text.replace(/^({NEWLINE})+/, "");
                  text = text.replace(/{NEWLINE}/g, "</br>");
                  this.lang[k] = text;
              }
          }
          for (var k in this.lang) {
              if (k)
                  this.langList.push({ id: k, text: this.lang[k] });
          }
          this.parsePedia(this.raw.ufopaedia);
          this.parseSprites(this.raw.extraSprites);
          console.log(this.spritesById);
          if (this.spritesById["BIGOBS.PCK"])
              this.bigSprite = this.spritesById["BIGOBS.PCK"].extra;
          if (this.spritesById["FLOOROB.PCK"])
              this.floorSprite = this.spritesById["FLOOROB.PCK"].extra;
          if (this.spritesById["HANDOB.PCK"])
              this.handSprite = this.spritesById["HANDOB.PCK"].extra;
          if (this.raw.extraSounds[0])
              this.sounds = this.raw.extraSounds[0].files;
          for (var _b = 0, _c = this.raw.items; _b < _c.length; _b++) {
              var data_2 = _c[_b];
              new Item(data_2);
          }
          for (var _d = 0, _e = this.raw.armors; _d < _e.length; _d++) {
              var data_3 = _e[_d];
              new Armor(data_3);
          }
          this.search = new Search();
          console.log(this.armors);
      };
      Ruleset.prototype.parsePedia = function (data) {
          for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
              var articleData = data_4[_i];
              if (articleData.id) {
                  var article = new PediaArticle(articleData);
                  this.articles.push(article);
                  this.articlesById[article.id] = article;
              }
          }
      };
      Ruleset.prototype.parseSprites = function (data) {
          for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
              var spriteData = data_5[_i];
              var sprite = new Sprite(spriteData);
              this.spritesById[sprite.id] = sprite;
          }
      };
      Ruleset.prototype.findNextArticle = function (current, delta) {
          if (!current)
              return null;
          var section = current.section;
          var list = section ? section.articles : this.articles;
          var index = list.findIndex(function (a) { return a.id == current.id; });
          if (index != undefined) {
              var nextIndex = index + delta;
              var nextArticle = list[nextIndex];
              return nextArticle;
          }
      };
      Ruleset.prototype.decamelize = function (str) {
          str = str.replace(/(.)([A-Z])/g, "$1 $2");
          str = str.substr(0, 1).toUpperCase() + str.substr(1);
          return str;
      };
      Ruleset.prototype.sprite = function (id) {
          if (id in this.spritesById)
              return this.spritesById[id].path;
          return this.path + id;
      };
      return Ruleset;
  }());

  function noop() { }
  function add_location(element, file, line, column, char) {
      element.__svelte_meta = {
          loc: { file, line, column, char }
      };
  }
  function run(fn) {
      return fn();
  }
  function blank_object() {
      return Object.create(null);
  }
  function run_all(fns) {
      fns.forEach(run);
  }
  function is_function(thing) {
      return typeof thing === 'function';
  }
  function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
  }

  function append(target, node) {
      target.appendChild(node);
  }
  function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
  }
  function detach(node) {
      node.parentNode.removeChild(node);
  }
  function detach_between(before, after) {
      while (before.nextSibling && before.nextSibling !== after) {
          before.parentNode.removeChild(before.nextSibling);
      }
  }
  function destroy_each(iterations, detaching) {
      for (let i = 0; i < iterations.length; i += 1) {
          if (iterations[i])
              iterations[i].d(detaching);
      }
  }
  function element(name) {
      return document.createElement(name);
  }
  function text(data) {
      return document.createTextNode(data);
  }
  function space() {
      return text(' ');
  }
  function empty() {
      return text('');
  }
  function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
      if (value == null)
          node.removeAttribute(attribute);
      else
          node.setAttribute(attribute, value);
  }
  function children(element) {
      return Array.from(element.childNodes);
  }
  function set_data(text, data) {
      data = '' + data;
      if (text.data !== data)
          text.data = data;
  }
  function set_style(node, key, value) {
      node.style.setProperty(key, value);
  }

  let current_component;
  function set_current_component(component) {
      current_component = component;
  }

  const dirty_components = [];
  const resolved_promise = Promise.resolve();
  let update_scheduled = false;
  const binding_callbacks = [];
  const render_callbacks = [];
  const flush_callbacks = [];
  function schedule_update() {
      if (!update_scheduled) {
          update_scheduled = true;
          resolved_promise.then(flush);
      }
  }
  function add_render_callback(fn) {
      render_callbacks.push(fn);
  }
  function flush() {
      const seen_callbacks = new Set();
      do {
          // first, call beforeUpdate functions
          // and update components
          while (dirty_components.length) {
              const component = dirty_components.shift();
              set_current_component(component);
              update(component.$$);
          }
          while (binding_callbacks.length)
              binding_callbacks.shift()();
          // then, once components are updated, call
          // afterUpdate functions. This may cause
          // subsequent updates...
          while (render_callbacks.length) {
              const callback = render_callbacks.pop();
              if (!seen_callbacks.has(callback)) {
                  callback();
                  // ...so guard against infinite loops
                  seen_callbacks.add(callback);
              }
          }
      } while (dirty_components.length);
      while (flush_callbacks.length) {
          flush_callbacks.pop()();
      }
      update_scheduled = false;
  }
  function update($$) {
      if ($$.fragment) {
          $$.update($$.dirty);
          run_all($$.before_render);
          $$.fragment.p($$.dirty, $$.ctx);
          $$.dirty = null;
          $$.after_render.forEach(add_render_callback);
      }
  }
  let outros;
  function group_outros() {
      outros = {
          remaining: 0,
          callbacks: []
      };
  }
  function check_outros() {
      if (!outros.remaining) {
          run_all(outros.callbacks);
      }
  }
  function on_outro(callback) {
      outros.callbacks.push(callback);
  }
  function mount_component(component, target, anchor) {
      const { fragment, on_mount, on_destroy, after_render } = component.$$;
      fragment.m(target, anchor);
      // onMount happens after the initial afterUpdate. Because
      // afterUpdate callbacks happen in reverse order (inner first)
      // we schedule onMount callbacks before afterUpdate callbacks
      add_render_callback(() => {
          const new_on_destroy = on_mount.map(run).filter(is_function);
          if (on_destroy) {
              on_destroy.push(...new_on_destroy);
          }
          else {
              // Edge case - component was destroyed immediately,
              // most likely as a result of a binding initialising
              run_all(new_on_destroy);
          }
          component.$$.on_mount = [];
      });
      after_render.forEach(add_render_callback);
  }
  function destroy(component, detaching) {
      if (component.$$) {
          run_all(component.$$.on_destroy);
          component.$$.fragment.d(detaching);
          // TODO null out other refs, including component.$$ (but need to
          // preserve final state?)
          component.$$.on_destroy = component.$$.fragment = null;
          component.$$.ctx = {};
      }
  }
  function make_dirty(component, key) {
      if (!component.$$.dirty) {
          dirty_components.push(component);
          schedule_update();
          component.$$.dirty = blank_object();
      }
      component.$$.dirty[key] = true;
  }
  function init(component, options, instance, create_fragment, not_equal$$1, prop_names) {
      const parent_component = current_component;
      set_current_component(component);
      const props = options.props || {};
      const $$ = component.$$ = {
          fragment: null,
          ctx: null,
          // state
          props: prop_names,
          update: noop,
          not_equal: not_equal$$1,
          bound: blank_object(),
          // lifecycle
          on_mount: [],
          on_destroy: [],
          before_render: [],
          after_render: [],
          context: new Map(parent_component ? parent_component.$$.context : []),
          // everything else
          callbacks: blank_object(),
          dirty: null
      };
      let ready = false;
      $$.ctx = instance
          ? instance(component, props, (key, value) => {
              if ($$.ctx && not_equal$$1($$.ctx[key], $$.ctx[key] = value)) {
                  if ($$.bound[key])
                      $$.bound[key](value);
                  if (ready)
                      make_dirty(component, key);
              }
          })
          : props;
      $$.update();
      ready = true;
      run_all($$.before_render);
      $$.fragment = create_fragment($$.ctx);
      if (options.target) {
          if (options.hydrate) {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment.l(children(options.target));
          }
          else {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment.c();
          }
          if (options.intro && component.$$.fragment.i)
              component.$$.fragment.i();
          mount_component(component, options.target, options.anchor);
          flush();
      }
      set_current_component(parent_component);
  }
  class SvelteComponent {
      $destroy() {
          destroy(this, true);
          this.$destroy = noop;
      }
      $on(type, callback) {
          const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
          callbacks.push(callback);
          return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                  callbacks.splice(index, 1);
          };
      }
      $set() {
          // overridden by instance, if it has props
      }
  }
  class SvelteComponentDev extends SvelteComponent {
      constructor(options) {
          if (!options || (!options.target && !options.$$inline)) {
              throw new Error(`'target' is a required option`);
          }
          super();
      }
      $destroy() {
          super.$destroy();
          this.$destroy = () => {
              console.warn(`Component was already destroyed`); // eslint-disable-line no-console
          };
      }
  }

  function n(e,t){for(const n in t)e[n]=t[n];return e}function a(e){return "function"==typeof e}function be(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function ye(e){const t=e-1;return t*t*t+1}function we(e,{delay:t=0,duration:n=400}){const s=+getComputedStyle(e).opacity;return {delay:t,duration:n,css:e=>`opacity: ${e*s}`}}function ke(e,{delay:t=0,duration:n=400,easing:s=ye,x:i=0,y:o=0,opacity:a=0}){const l=getComputedStyle(e),r=+l.opacity,c="none"===l.transform?"":l.transform,u=r*(1-a);return {delay:t,duration:n,easing:s,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*i}px, ${(1-e)*o}px);\n\t\t\topacity: ${r-u*t}`}}var xe=Object.freeze({fade:we,fly:ke,slide:function(e,{delay:t=0,duration:n=400,easing:s=ye}){const i=getComputedStyle(e),o=+i.opacity,a=parseFloat(i.height),l=parseFloat(i.paddingTop),r=parseFloat(i.paddingBottom),c=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),d=parseFloat(i.borderTopWidth),p=parseFloat(i.borderBottomWidth);return {delay:t,duration:n,easing:s,css:e=>"overflow: hidden;"+`opacity: ${Math.min(20*e,1)*o};`+`height: ${e*a}px;`+`padding-top: ${e*l}px;`+`padding-bottom: ${e*r}px;`+`margin-top: ${e*c}px;`+`margin-bottom: ${e*u}px;`+`border-top-width: ${e*d}px;`+`border-bottom-width: ${e*p}px;`}},scale:function(e,{delay:t=0,duration:n=400,easing:s=ye,start:i=0,opacity:o=0}){const a=getComputedStyle(e),l=+a.opacity,r="none"===a.transform?"":a.transform,c=1-i,u=l*(1-o);return {delay:t,duration:n,easing:s,css:(e,t)=>`\n\t\t\ttransform: ${r} scale(${1-c*t});\n\t\t\topacity: ${l-u*t}\n\t\t`}},draw:function(e,{delay:t=0,speed:n,duration:s,easing:i=be}){const o=e.getTotalLength();return void 0===s?s=void 0===n?800:o/n:"function"==typeof s&&(s=s(o)),{delay:t,duration:s,easing:i,css:(e,t)=>`stroke-dasharray: ${e*o} ${t*o}`}},crossfade:function(e){var{fallback:t}=e,s=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&(n[s[i]]=e[s[i]]);}return n}(e,["fallback"]);const i=new Map,o=new Map;function l(e,i,o){return (l,r)=>(e.set(r.key,{rect:l.getBoundingClientRect()}),()=>{if(i.has(r.key)){const{rect:e}=i.get(r.key);return i.delete(r.key),function(e,t,i){const{delay:o=0,duration:l=(e=>30*Math.sqrt(e)),easing:r=ye}=n(n({},s),i),c=t.getBoundingClientRect(),u=e.left-c.left,d=e.top-c.top,p=Math.sqrt(u*u+d*d),m=getComputedStyle(t),f="none"===m.transform?"":m.transform,h=+m.opacity;return {delay:o,duration:a(l)?l(p):l,easing:r,css:(e,t)=>`\n\t\t\t\topacity: ${e*h};\n\t\t\t\ttransform: ${f} translate(${t*u}px,${t*d}px);\n\t\t\t`}}(e,l,r)}return e.delete(r.key),t&&t(l,r,o)})}return [l(o,i,!1),l(i,o,!0)]}});//# sourceMappingURL=module.js.map

  /* src\Sprite.svelte generated by Svelte v3.5.1 */

  const file = "src\\Sprite.svelte";

  // (38:0) {#if (id || path)}
  function create_if_block(ctx) {
  	var div, img, img_alt_value, dispose;

  	return {
  		c: function create() {
  			div = element("div");
  			img = element("img");
  			img.className = "pedia-image svelte-xkkki6";
  			img.alt = img_alt_value = ctx.id || ctx.path || "";
  			img.src = ctx.url;
  			add_location(img, file, 39, 4, 691);
  			add_location(div, file, 38, 2, 680);
  			dispose = listen(img, "load", ctx.loaded);
  		},

  		m: function mount(target, anchor) {
  			insert(target, div, anchor);
  			append(div, img);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.id || changed.path) && img_alt_value !== (img_alt_value = ctx.id || ctx.path || "")) {
  				img.alt = img_alt_value;
  			}

  			if (changed.url) {
  				img.src = ctx.url;
  			}
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(div);
  			}

  			dispose();
  		}
  	};
  }

  function create_fragment(ctx) {
  	var if_block_anchor;

  	var if_block = ((ctx.id || ctx.path)) && create_if_block(ctx);

  	return {
  		c: function create() {
  			if (if_block) if_block.c();
  			if_block_anchor = empty();
  		},

  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},

  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			insert(target, if_block_anchor, anchor);
  		},

  		p: function update(changed, ctx) {
  			if ((ctx.id || ctx.path)) {
  				if (if_block) {
  					if_block.p(changed, ctx);
  				} else {
  					if_block = create_if_block(ctx);
  					if_block.c();
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}
  		},

  		i: noop,
  		o: noop,

  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);

  			if (detaching) {
  				detach(if_block_anchor);
  			}
  		}
  	};
  }

  function instance($$self, $$props, $$invalidate) {
  	let { id = null, path = null, zoom = 2 } = $$props;

    let url = null;

    function loaded(e){
      e.target.width = e.target.naturalWidth * zoom;
      e.target.height = e.target.naturalHeight * zoom;
    }

  	const writable_props = ['id', 'path', 'zoom'];
  	Object.keys($$props).forEach(key => {
  		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Sprite> was created with unknown prop '${key}'`);
  	});

  	$$self.$set = $$props => {
  		if ('id' in $$props) $$invalidate('id', id = $$props.id);
  		if ('path' in $$props) $$invalidate('path', path = $$props.path);
  		if ('zoom' in $$props) $$invalidate('zoom', zoom = $$props.zoom);
  	};

  	$$self.$$.update = ($$dirty = { path: 1, id: 1 }) => {
  		if ($$dirty.path || $$dirty.id) { {
          if(path)
            $$invalidate('url', url = rul.path + path);
      
          if(id){
            let sprite = rul.spritesById[id];
            $$invalidate('url', url = sprite? rul.path +sprite.path : "0.png");
          }
        } }
  	};

  	return { id, path, zoom, url, loaded };
  }

  class Sprite$1 extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance, create_fragment, safe_not_equal, ["id", "path", "zoom"]);
  	}

  	get id() {
  		throw new Error("<Sprite>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set id(value) {
  		throw new Error("<Sprite>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get path() {
  		throw new Error("<Sprite>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set path(value) {
  		throw new Error("<Sprite>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get zoom() {
  		throw new Error("<Sprite>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set zoom(value) {
  		throw new Error("<Sprite>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src\SpecialBonus.svelte generated by Svelte v3.5.1 */

  function get_each_context(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.b = list[i];
  	child_ctx.i = i;
  	return child_ctx;
  }

  // (21:2) {#if i != 0}
  function create_if_block$1(ctx) {
  	var t;

  	return {
  		c: function create() {
  			t = text(" +");
  		},

  		m: function mount(target, anchor) {
  			insert(target, t, anchor);
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(t);
  			}
  		}
  	};
  }

  // (20:0) {#each flat as b, i}
  function create_each_block(ctx) {
  	var t, raw_value = ctx.b[0] +'×' + ctx.b[1], raw_before, raw_after;

  	var if_block = (ctx.i != 0) && create_if_block$1();

  	return {
  		c: function create() {
  			if (if_block) if_block.c();
  			t = space();
  			raw_before = element('noscript');
  			raw_after = element('noscript');
  		},

  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			insert(target, t, anchor);
  			insert(target, raw_before, anchor);
  			raw_before.insertAdjacentHTML("afterend", raw_value);
  			insert(target, raw_after, anchor);
  		},

  		p: function update(changed, ctx) {
  			if (ctx.i != 0) {
  				if (!if_block) {
  					if_block = create_if_block$1();
  					if_block.c();
  					if_block.m(t.parentNode, t);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}
  		},

  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);

  			if (detaching) {
  				detach(t);
  				detach_between(raw_before, raw_after);
  				detach(raw_before);
  				detach(raw_after);
  			}
  		}
  	};
  }

  function create_fragment$1(ctx) {
  	var each_1_anchor;

  	var each_value = ctx.flat;

  	var each_blocks = [];

  	for (var i = 0; i < each_value.length; i += 1) {
  		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  	}

  	return {
  		c: function create() {
  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}

  			each_1_anchor = empty();
  		},

  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},

  		m: function mount(target, anchor) {
  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].m(target, anchor);
  			}

  			insert(target, each_1_anchor, anchor);
  		},

  		p: function update(changed, ctx) {
  			if (changed.flat) {
  				each_value = ctx.flat;

  				for (var i = 0; i < each_value.length; i += 1) {
  					const child_ctx = get_each_context(ctx, each_value, i);

  					if (each_blocks[i]) {
  						each_blocks[i].p(changed, child_ctx);
  					} else {
  						each_blocks[i] = create_each_block(child_ctx);
  						each_blocks[i].c();
  						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
  					}
  				}

  				for (; i < each_blocks.length; i += 1) {
  					each_blocks[i].d(1);
  				}
  				each_blocks.length = each_value.length;
  			}
  		},

  		i: noop,
  		o: noop,

  		d: function destroy(detaching) {
  			destroy_each(each_blocks, detaching);

  			if (detaching) {
  				detach(each_1_anchor);
  			}
  		}
  	};
  }

  function instance$1($$self, $$props, $$invalidate) {
  	let { bonus } = $$props;
    let flat = [];
    for (let type of Object.keys(bonus)) {
      if (bonus[type].length) {
        for (let power in bonus[type]) {
          let b = bonus[type][power];
          if (b != 0) {
            power = power * 1 + 1;
            flat.push([type + (power == 1 ? "" : "<sup>" + power + "</sup>"), b]);
          }
        }
      } else {
        if(bonus[type] != 0)
          flat.push([type, bonus[type]]);
      }
    }

  	const writable_props = ['bonus'];
  	Object.keys($$props).forEach(key => {
  		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<SpecialBonus> was created with unknown prop '${key}'`);
  	});

  	$$self.$set = $$props => {
  		if ('bonus' in $$props) $$invalidate('bonus', bonus = $$props.bonus);
  	};

  	return { bonus, flat };
  }

  class SpecialBonus extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["bonus"]);

  		const { ctx } = this.$$;
  		const props = options.props || {};
  		if (ctx.bonus === undefined && !('bonus' in props)) {
  			console.warn("<SpecialBonus> was created without expected prop 'bonus'");
  		}
  	}

  	get bonus() {
  		throw new Error("<SpecialBonus>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set bonus(value) {
  		throw new Error("<SpecialBonus>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src\ItemList.svelte generated by Svelte v3.5.1 */

  const file$1 = "src\\ItemList.svelte";

  function get_each_context$1(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.item = list[i];
  	child_ctx.i = i;
  	return child_ctx;
  }

  // (7:2) {#if i!=0}
  function create_if_block$2(ctx) {
  	var t;

  	return {
  		c: function create() {
  			t = text(",");
  		},

  		m: function mount(target, anchor) {
  			insert(target, t, anchor);
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(t);
  			}
  		}
  	};
  }

  // (6:0) {#each items as item, i}
  function create_each_block$1(ctx) {
  	var t0, a, t1_value = rul.lang[ctx.item], t1, a_href_value;

  	var if_block = (ctx.i!=0) && create_if_block$2();

  	return {
  		c: function create() {
  			if (if_block) if_block.c();
  			t0 = space();
  			a = element("a");
  			t1 = text(t1_value);
  			a.href = a_href_value = '#' + ctx.item;
  			add_location(a, file$1, 7, 2, 128);
  		},

  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			insert(target, t0, anchor);
  			insert(target, a, anchor);
  			append(a, t1);
  		},

  		p: function update(changed, ctx) {
  			if (ctx.i!=0) {
  				if (!if_block) {
  					if_block = create_if_block$2();
  					if_block.c();
  					if_block.m(t0.parentNode, t0);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}

  			if ((changed.items) && t1_value !== (t1_value = rul.lang[ctx.item])) {
  				set_data(t1, t1_value);
  			}

  			if ((changed.items) && a_href_value !== (a_href_value = '#' + ctx.item)) {
  				a.href = a_href_value;
  			}
  		},

  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);

  			if (detaching) {
  				detach(t0);
  				detach(a);
  			}
  		}
  	};
  }

  function create_fragment$2(ctx) {
  	var each_1_anchor;

  	var each_value = ctx.items;

  	var each_blocks = [];

  	for (var i = 0; i < each_value.length; i += 1) {
  		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  	}

  	return {
  		c: function create() {
  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}

  			each_1_anchor = empty();
  		},

  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},

  		m: function mount(target, anchor) {
  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].m(target, anchor);
  			}

  			insert(target, each_1_anchor, anchor);
  		},

  		p: function update(changed, ctx) {
  			if (changed.items || changed.rul) {
  				each_value = ctx.items;

  				for (var i = 0; i < each_value.length; i += 1) {
  					const child_ctx = get_each_context$1(ctx, each_value, i);

  					if (each_blocks[i]) {
  						each_blocks[i].p(changed, child_ctx);
  					} else {
  						each_blocks[i] = create_each_block$1(child_ctx);
  						each_blocks[i].c();
  						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
  					}
  				}

  				for (; i < each_blocks.length; i += 1) {
  					each_blocks[i].d(1);
  				}
  				each_blocks.length = each_value.length;
  			}
  		},

  		i: noop,
  		o: noop,

  		d: function destroy(detaching) {
  			destroy_each(each_blocks, detaching);

  			if (detaching) {
  				detach(each_1_anchor);
  			}
  		}
  	};
  }

  function instance$2($$self, $$props, $$invalidate) {
  	let { items } = $$props;

  	const writable_props = ['items'];
  	Object.keys($$props).forEach(key => {
  		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<ItemList> was created with unknown prop '${key}'`);
  	});

  	$$self.$set = $$props => {
  		if ('items' in $$props) $$invalidate('items', items = $$props.items);
  	};

  	return { items };
  }

  class ItemList extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance$2, create_fragment$2, safe_not_equal, ["items"]);

  		const { ctx } = this.$$;
  		const props = options.props || {};
  		if (ctx.items === undefined && !('items' in props)) {
  			console.warn("<ItemList> was created without expected prop 'items'");
  		}
  	}

  	get items() {
  		throw new Error("<ItemList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set items(value) {
  		throw new Error("<ItemList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src\Item.svelte generated by Svelte v3.5.1 */

  const file$2 = "src\\Item.svelte";

  function get_each_context_1(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.field = list[i];
  	child_ctx.i = i;
  	return child_ctx;
  }

  function get_each_context$2(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.prop = list[i];
  	return child_ctx;
  }

  // (29:4) {#if prop[0] != 'categories'}
  function create_if_block$3(ctx) {
  	var tr, td0, t0_value = rul.decamelize(ctx.prop[0]), t0, t1, td1, current_block_type_index, if_block, current;

  	var if_block_creators = [
  		create_if_block_1,
  		create_if_block_2,
  		create_if_block_3,
  		create_if_block_4,
  		create_if_block_6,
  		create_if_block_7,
  		create_else_block_1
  	];

  	var if_blocks = [];

  	function select_block_type(ctx) {
  		if (ctx.prop[0] == 'compatibleAmmo' || ctx.prop[0] == 'requiresBuy') return 0;
  		if (['damageBonus', 'meleeBonus', 'accuracyMultiplier', 'meleeMultiplier', 'closeQuartersMultiplier'].includes(ctx.prop[0])) return 1;
  		if (ctx.prop[0] == 'damageType') return 2;
  		if (['reloadSound', 'fireSound', 'meleeHitSound'].includes(ctx.prop[0])) return 3;
  		if (['floorSprite', 'handSprite'].includes(ctx.prop[0])) return 4;
  		if (ctx.prop[1] instanceof Object) return 5;
  		return 6;
  	}

  	current_block_type_index = select_block_type(ctx);
  	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

  	return {
  		c: function create() {
  			tr = element("tr");
  			td0 = element("td");
  			t0 = text(t0_value);
  			t1 = space();
  			td1 = element("td");
  			if_block.c();
  			td0.className = "svelte-1ukza6";
  			add_location(td0, file$2, 30, 8, 589);
  			td1.className = "svelte-1ukza6";
  			add_location(td1, file$2, 31, 8, 633);
  			add_location(tr, file$2, 29, 6, 575);
  		},

  		m: function mount(target, anchor) {
  			insert(target, tr, anchor);
  			append(tr, td0);
  			append(td0, t0);
  			append(tr, t1);
  			append(tr, td1);
  			if_blocks[current_block_type_index].m(td1, null);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			if ((!current || changed.item) && t0_value !== (t0_value = rul.decamelize(ctx.prop[0]))) {
  				set_data(t0, t0_value);
  			}

  			var previous_block_index = current_block_type_index;
  			current_block_type_index = select_block_type(ctx);
  			if (current_block_type_index === previous_block_index) {
  				if_blocks[current_block_type_index].p(changed, ctx);
  			} else {
  				group_outros();
  				on_outro(() => {
  					if_blocks[previous_block_index].d(1);
  					if_blocks[previous_block_index] = null;
  				});
  				if_block.o(1);
  				check_outros();

  				if_block = if_blocks[current_block_type_index];
  				if (!if_block) {
  					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  					if_block.c();
  				}
  				if_block.i(1);
  				if_block.m(td1, null);
  			}
  		},

  		i: function intro(local) {
  			if (current) return;
  			if (if_block) if_block.i();
  			current = true;
  		},

  		o: function outro(local) {
  			if (if_block) if_block.o();
  			current = false;
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(tr);
  			}

  			if_blocks[current_block_type_index].d();
  		}
  	};
  }

  // (53:8) {:else}
  function create_else_block_1(ctx) {
  	var t_value = ctx.prop[1], t;

  	return {
  		c: function create() {
  			t = text(t_value);
  		},

  		m: function mount(target, anchor) {
  			insert(target, t, anchor);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.item) && t_value !== (t_value = ctx.prop[1])) {
  				set_data(t, t_value);
  			}
  		},

  		i: noop,
  		o: noop,

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(t);
  			}
  		}
  	};
  }

  // (48:44) 
  function create_if_block_7(ctx) {
  	var each_1_anchor;

  	var each_value_1 = Object.keys(ctx.prop[1]).sort();

  	var each_blocks = [];

  	for (var i = 0; i < each_value_1.length; i += 1) {
  		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  	}

  	return {
  		c: function create() {
  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}

  			each_1_anchor = empty();
  		},

  		m: function mount(target, anchor) {
  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].m(target, anchor);
  			}

  			insert(target, each_1_anchor, anchor);
  		},

  		p: function update(changed, ctx) {
  			if (changed.item) {
  				each_value_1 = Object.keys(ctx.prop[1]).sort();

  				for (var i = 0; i < each_value_1.length; i += 1) {
  					const child_ctx = get_each_context_1(ctx, each_value_1, i);

  					if (each_blocks[i]) {
  						each_blocks[i].p(changed, child_ctx);
  					} else {
  						each_blocks[i] = create_each_block_1(child_ctx);
  						each_blocks[i].c();
  						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
  					}
  				}

  				for (; i < each_blocks.length; i += 1) {
  					each_blocks[i].d(1);
  				}
  				each_blocks.length = each_value_1.length;
  			}
  		},

  		i: noop,
  		o: noop,

  		d: function destroy(detaching) {
  			destroy_each(each_blocks, detaching);

  			if (detaching) {
  				detach(each_1_anchor);
  			}
  		}
  	};
  }

  // (46:66) 
  function create_if_block_6(ctx) {
  	var a, t0_value = ctx.prop[1], t0, a_href_value, t1, img, img_src_value;

  	return {
  		c: function create() {
  			a = element("a");
  			t0 = text(t0_value);
  			t1 = space();
  			img = element("img");
  			a.href = a_href_value = rul.specialSprite(ctx.prop[0], ctx.prop[1]);
  			add_location(a, file$2, 46, 10, 1427);
  			img.className = "sprite svelte-1ukza6";
  			img.src = img_src_value = rul.specialSprite(ctx.prop[0], ctx.prop[1]);
  			add_location(img, file$2, 46, 70, 1487);
  		},

  		m: function mount(target, anchor) {
  			insert(target, a, anchor);
  			append(a, t0);
  			insert(target, t1, anchor);
  			insert(target, img, anchor);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.item) && t0_value !== (t0_value = ctx.prop[1])) {
  				set_data(t0, t0_value);
  			}

  			if ((changed.item) && a_href_value !== (a_href_value = rul.specialSprite(ctx.prop[0], ctx.prop[1]))) {
  				a.href = a_href_value;
  			}

  			if ((changed.item) && img_src_value !== (img_src_value = rul.specialSprite(ctx.prop[0], ctx.prop[1]))) {
  				img.src = img_src_value;
  			}
  		},

  		i: noop,
  		o: noop,

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(a);
  				detach(t1);
  				detach(img);
  			}
  		}
  	};
  }

  // (39:82) 
  function create_if_block_4(ctx) {
  	var if_block_anchor;

  	function select_block_type_1(ctx) {
  		if (rul.sounds[ctx.prop[1]]) return create_if_block_5;
  		return create_else_block;
  	}

  	var current_block_type = select_block_type_1(ctx);
  	var if_block = current_block_type(ctx);

  	return {
  		c: function create() {
  			if_block.c();
  			if_block_anchor = empty();
  		},

  		m: function mount(target, anchor) {
  			if_block.m(target, anchor);
  			insert(target, if_block_anchor, anchor);
  		},

  		p: function update(changed, ctx) {
  			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
  				if_block.p(changed, ctx);
  			} else {
  				if_block.d(1);
  				if_block = current_block_type(ctx);
  				if (if_block) {
  					if_block.c();
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			}
  		},

  		i: noop,
  		o: noop,

  		d: function destroy(detaching) {
  			if_block.d(detaching);

  			if (detaching) {
  				detach(if_block_anchor);
  			}
  		}
  	};
  }

  // (37:42) 
  function create_if_block_3(ctx) {
  	var t_value = ctx.item.damageTypeName(), t;

  	return {
  		c: function create() {
  			t = text(t_value);
  		},

  		m: function mount(target, anchor) {
  			insert(target, t, anchor);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.item) && t_value !== (t_value = ctx.item.damageTypeName())) {
  				set_data(t, t_value);
  			}
  		},

  		i: noop,
  		o: noop,

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(t);
  			}
  		}
  	};
  }

  // (35:134) 
  function create_if_block_2(ctx) {
  	var current;

  	var specialbonus = new SpecialBonus({
  		props: { bonus: ctx.prop[1] },
  		$$inline: true
  	});

  	return {
  		c: function create() {
  			specialbonus.$$.fragment.c();
  		},

  		m: function mount(target, anchor) {
  			mount_component(specialbonus, target, anchor);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			var specialbonus_changes = {};
  			if (changed.item) specialbonus_changes.bonus = ctx.prop[1];
  			specialbonus.$set(specialbonus_changes);
  		},

  		i: function intro(local) {
  			if (current) return;
  			specialbonus.$$.fragment.i(local);

  			current = true;
  		},

  		o: function outro(local) {
  			specialbonus.$$.fragment.o(local);
  			current = false;
  		},

  		d: function destroy(detaching) {
  			specialbonus.$destroy(detaching);
  		}
  	};
  }

  // (33:8) {#if prop[0] == 'compatibleAmmo' || prop[0] == 'requiresBuy'}
  function create_if_block_1(ctx) {
  	var current;

  	var itemlist = new ItemList({
  		props: { items: ctx.prop[1] },
  		$$inline: true
  	});

  	return {
  		c: function create() {
  			itemlist.$$.fragment.c();
  		},

  		m: function mount(target, anchor) {
  			mount_component(itemlist, target, anchor);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			var itemlist_changes = {};
  			if (changed.item) itemlist_changes.items = ctx.prop[1];
  			itemlist.$set(itemlist_changes);
  		},

  		i: function intro(local) {
  			if (current) return;
  			itemlist.$$.fragment.i(local);

  			current = true;
  		},

  		o: function outro(local) {
  			itemlist.$$.fragment.o(local);
  			current = false;
  		},

  		d: function destroy(detaching) {
  			itemlist.$destroy(detaching);
  		}
  	};
  }

  // (50:12) {#if i!=0}
  function create_if_block_8(ctx) {
  	var t;

  	return {
  		c: function create() {
  			t = text(",");
  		},

  		m: function mount(target, anchor) {
  			insert(target, t, anchor);
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(t);
  			}
  		}
  	};
  }

  // (49:10) {#each Object.keys(prop[1]).sort() as field, i}
  function create_each_block_1(ctx) {
  	var t0, t1_value = ctx.field, t1, t2, t3_value = ctx.prop[1][ctx.field], t3;

  	var if_block = (ctx.i!=0) && create_if_block_8();

  	return {
  		c: function create() {
  			if (if_block) if_block.c();
  			t0 = space();
  			t1 = text(t1_value);
  			t2 = text(": ");
  			t3 = text(t3_value);
  		},

  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			insert(target, t0, anchor);
  			insert(target, t1, anchor);
  			insert(target, t2, anchor);
  			insert(target, t3, anchor);
  		},

  		p: function update(changed, ctx) {
  			if (ctx.i!=0) {
  				if (!if_block) {
  					if_block = create_if_block_8();
  					if_block.c();
  					if_block.m(t0.parentNode, t0);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}

  			if ((changed.item) && t1_value !== (t1_value = ctx.field)) {
  				set_data(t1, t1_value);
  			}

  			if ((changed.item) && t3_value !== (t3_value = ctx.prop[1][ctx.field])) {
  				set_data(t3, t3_value);
  			}
  		},

  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);

  			if (detaching) {
  				detach(t0);
  				detach(t1);
  				detach(t2);
  				detach(t3);
  			}
  		}
  	};
  }

  // (43:10) {:else}
  function create_else_block(ctx) {
  	var t_value = ctx.prop[1], t;

  	return {
  		c: function create() {
  			t = text(t_value);
  		},

  		m: function mount(target, anchor) {
  			insert(target, t, anchor);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.item) && t_value !== (t_value = ctx.prop[1])) {
  				set_data(t, t_value);
  			}
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(t);
  			}
  		}
  	};
  }

  // (40:10) {#if rul.sounds[prop[1]]}
  function create_if_block_5(ctx) {
  	var a, t0_value = rul.sounds[ctx.prop[1]], t0, a_href_value, t1, audio, t2, audio_src_value;

  	return {
  		c: function create() {
  			a = element("a");
  			t0 = text(t0_value);
  			t1 = space();
  			audio = element("audio");
  			t2 = text("Audio tag not working");
  			a.href = a_href_value = rul.sound(ctx.prop[1]);
  			add_location(a, file$2, 40, 12, 1150);
  			audio.controls = true;
  			audio.src = audio_src_value = rul.sound(ctx.prop[1]);
  			audio.className = "svelte-1ukza6";
  			add_location(audio, file$2, 41, 12, 1218);
  		},

  		m: function mount(target, anchor) {
  			insert(target, a, anchor);
  			append(a, t0);
  			insert(target, t1, anchor);
  			insert(target, audio, anchor);
  			append(audio, t2);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.item) && t0_value !== (t0_value = rul.sounds[ctx.prop[1]])) {
  				set_data(t0, t0_value);
  			}

  			if ((changed.item) && a_href_value !== (a_href_value = rul.sound(ctx.prop[1]))) {
  				a.href = a_href_value;
  			}

  			if ((changed.item) && audio_src_value !== (audio_src_value = rul.sound(ctx.prop[1]))) {
  				audio.src = audio_src_value;
  			}
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(a);
  				detach(t1);
  				detach(audio);
  			}
  		}
  	};
  }

  // (28:2) {#each Object.entries(item).sort((a,b) => a[0]>b[0]?1:-1) as prop}
  function create_each_block$2(ctx) {
  	var if_block_anchor, current;

  	var if_block = (ctx.prop[0] != 'categories') && create_if_block$3(ctx);

  	return {
  		c: function create() {
  			if (if_block) if_block.c();
  			if_block_anchor = empty();
  		},

  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			insert(target, if_block_anchor, anchor);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			if (ctx.prop[0] != 'categories') {
  				if (if_block) {
  					if_block.p(changed, ctx);
  					if_block.i(1);
  				} else {
  					if_block = create_if_block$3(ctx);
  					if_block.c();
  					if_block.i(1);
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			} else if (if_block) {
  				group_outros();
  				on_outro(() => {
  					if_block.d(1);
  					if_block = null;
  				});

  				if_block.o(1);
  				check_outros();
  			}
  		},

  		i: function intro(local) {
  			if (current) return;
  			if (if_block) if_block.i();
  			current = true;
  		},

  		o: function outro(local) {
  			if (if_block) if_block.o();
  			current = false;
  		},

  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);

  			if (detaching) {
  				detach(if_block_anchor);
  			}
  		}
  	};
  }

  function create_fragment$3(ctx) {
  	var t0, table, t1, br, current;

  	var sprite = new Sprite$1({
  		props: { path: ctx.item.sprite, zoom: "4" },
  		$$inline: true
  	});

  	var each_value = Object.entries(ctx.item).sort(func);

  	var each_blocks = [];

  	for (var i = 0; i < each_value.length; i += 1) {
  		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  	}

  	function outro_block(i, detaching, local) {
  		if (each_blocks[i]) {
  			if (detaching) {
  				on_outro(() => {
  					each_blocks[i].d(detaching);
  					each_blocks[i] = null;
  				});
  			}

  			each_blocks[i].o(local);
  		}
  	}

  	return {
  		c: function create() {
  			sprite.$$.fragment.c();
  			t0 = space();
  			table = element("table");

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}

  			t1 = space();
  			br = element("br");
  			add_location(table, file$2, 26, 0, 455);
  			add_location(br, file$2, 61, 0, 1869);
  		},

  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},

  		m: function mount(target, anchor) {
  			mount_component(sprite, target, anchor);
  			insert(target, t0, anchor);
  			insert(target, table, anchor);

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].m(table, null);
  			}

  			insert(target, t1, anchor);
  			insert(target, br, anchor);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			var sprite_changes = {};
  			if (changed.item) sprite_changes.path = ctx.item.sprite;
  			sprite.$set(sprite_changes);

  			if (changed.item || changed.rul) {
  				each_value = Object.entries(ctx.item).sort(func);

  				for (var i = 0; i < each_value.length; i += 1) {
  					const child_ctx = get_each_context$2(ctx, each_value, i);

  					if (each_blocks[i]) {
  						each_blocks[i].p(changed, child_ctx);
  						each_blocks[i].i(1);
  					} else {
  						each_blocks[i] = create_each_block$2(child_ctx);
  						each_blocks[i].c();
  						each_blocks[i].i(1);
  						each_blocks[i].m(table, null);
  					}
  				}

  				group_outros();
  				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
  				check_outros();
  			}
  		},

  		i: function intro(local) {
  			if (current) return;
  			sprite.$$.fragment.i(local);

  			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

  			current = true;
  		},

  		o: function outro(local) {
  			sprite.$$.fragment.o(local);

  			each_blocks = each_blocks.filter(Boolean);
  			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0, 0);

  			current = false;
  		},

  		d: function destroy(detaching) {
  			sprite.$destroy(detaching);

  			if (detaching) {
  				detach(t0);
  				detach(table);
  			}

  			destroy_each(each_blocks, detaching);

  			if (detaching) {
  				detach(t1);
  				detach(br);
  			}
  		}
  	};
  }

  function func(a,b) {
  	return a[0]>b[0]?1:-1;
  }

  function instance$3($$self, $$props, $$invalidate) {
  	  

    let { item } = $$props;

  	const writable_props = ['item'];
  	Object.keys($$props).forEach(key => {
  		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Item> was created with unknown prop '${key}'`);
  	});

  	$$self.$set = $$props => {
  		if ('item' in $$props) $$invalidate('item', item = $$props.item);
  	};

  	return { item };
  }

  class Item$1 extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance$3, create_fragment$3, safe_not_equal, ["item"]);

  		const { ctx } = this.$$;
  		const props = options.props || {};
  		if (ctx.item === undefined && !('item' in props)) {
  			console.warn("<Item> was created without expected prop 'item'");
  		}
  	}

  	get item() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set item(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src\Armor.svelte generated by Svelte v3.5.1 */

  const file$3 = "src\\Armor.svelte";

  function get_each_context$3(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.prop = list[i];
  	return child_ctx;
  }

  // (13:2) {#each Object.entries(armor).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
  function create_each_block$3(ctx) {
  	var tr, td0, t0_value = rul.decamelize(ctx.prop[0]), t0, t1, td1, t2_value = ctx.prop[1], t2, t3;

  	return {
  		c: function create() {
  			tr = element("tr");
  			td0 = element("td");
  			t0 = text(t0_value);
  			t1 = space();
  			td1 = element("td");
  			t2 = text(t2_value);
  			t3 = space();
  			add_location(td0, file$3, 14, 6, 325);
  			add_location(td1, file$3, 15, 6, 367);
  			add_location(tr, file$3, 13, 4, 313);
  		},

  		m: function mount(target, anchor) {
  			insert(target, tr, anchor);
  			append(tr, td0);
  			append(td0, t0);
  			append(tr, t1);
  			append(tr, td1);
  			append(td1, t2);
  			append(tr, t3);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.armor) && t0_value !== (t0_value = rul.decamelize(ctx.prop[0]))) {
  				set_data(t0, t0_value);
  			}

  			if ((changed.armor) && t2_value !== (t2_value = ctx.prop[1])) {
  				set_data(t2, t2_value);
  			}
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(tr);
  			}
  		}
  	};
  }

  function create_fragment$4(ctx) {
  	var t, table, current;

  	var sprite = new Sprite$1({
  		props: { path: rul.sprite(ctx.armor.spriteInv + "M0.SPK"), zoom: "2" },
  		$$inline: true
  	});

  	var each_value = Object.entries(ctx.armor).sort(func$1);

  	var each_blocks = [];

  	for (var i = 0; i < each_value.length; i += 1) {
  		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
  	}

  	return {
  		c: function create() {
  			sprite.$$.fragment.c();
  			t = space();
  			table = element("table");

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}
  			add_location(table, file$3, 11, 0, 220);
  		},

  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},

  		m: function mount(target, anchor) {
  			mount_component(sprite, target, anchor);
  			insert(target, t, anchor);
  			insert(target, table, anchor);

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].m(table, null);
  			}

  			current = true;
  		},

  		p: function update(changed, ctx) {
  			var sprite_changes = {};
  			if (changed.rul || changed.armor) sprite_changes.path = rul.sprite(ctx.armor.spriteInv + "M0.SPK");
  			sprite.$set(sprite_changes);

  			if (changed.armor || changed.rul) {
  				each_value = Object.entries(ctx.armor).sort(func$1);

  				for (var i = 0; i < each_value.length; i += 1) {
  					const child_ctx = get_each_context$3(ctx, each_value, i);

  					if (each_blocks[i]) {
  						each_blocks[i].p(changed, child_ctx);
  					} else {
  						each_blocks[i] = create_each_block$3(child_ctx);
  						each_blocks[i].c();
  						each_blocks[i].m(table, null);
  					}
  				}

  				for (; i < each_blocks.length; i += 1) {
  					each_blocks[i].d(1);
  				}
  				each_blocks.length = each_value.length;
  			}
  		},

  		i: function intro(local) {
  			if (current) return;
  			sprite.$$.fragment.i(local);

  			current = true;
  		},

  		o: function outro(local) {
  			sprite.$$.fragment.o(local);
  			current = false;
  		},

  		d: function destroy(detaching) {
  			sprite.$destroy(detaching);

  			if (detaching) {
  				detach(t);
  				detach(table);
  			}

  			destroy_each(each_blocks, detaching);
  		}
  	};
  }

  function func$1(a, b) {
  	return (a[0] > b[0] ? 1 : -1);
  }

  function instance$4($$self, $$props, $$invalidate) {
  	

    let { armor } = $$props;

  	const writable_props = ['armor'];
  	Object.keys($$props).forEach(key => {
  		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Armor> was created with unknown prop '${key}'`);
  	});

  	$$self.$set = $$props => {
  		if ('armor' in $$props) $$invalidate('armor', armor = $$props.armor);
  	};

  	$$self.$$.update = ($$dirty = { armor: 1 }) => {
  		if ($$dirty.armor) { {console.log(armor);} }
  	};

  	return { armor };
  }

  class Armor$1 extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance$4, create_fragment$4, safe_not_equal, ["armor"]);

  		const { ctx } = this.$$;
  		const props = options.props || {};
  		if (ctx.armor === undefined && !('armor' in props)) {
  			console.warn("<Armor> was created without expected prop 'armor'");
  		}
  	}

  	get armor() {
  		throw new Error("<Armor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set armor(value) {
  		throw new Error("<Armor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src\Article.svelte generated by Svelte v3.5.1 */

  const file$4 = "src\\Article.svelte";

  // (22:31) 
  function create_if_block_1$1(ctx) {
  	var current;

  	var armor = new Armor$1({
  		props: { armor: rul.armors[ctx.article.id] },
  		$$inline: true
  	});

  	return {
  		c: function create() {
  			armor.$$.fragment.c();
  		},

  		m: function mount(target, anchor) {
  			mount_component(armor, target, anchor);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			var armor_changes = {};
  			if (changed.rul || changed.article) armor_changes.armor = rul.armors[ctx.article.id];
  			armor.$set(armor_changes);
  		},

  		i: function intro(local) {
  			if (current) return;
  			armor.$$.fragment.i(local);

  			current = true;
  		},

  		o: function outro(local) {
  			armor.$$.fragment.o(local);
  			current = false;
  		},

  		d: function destroy(detaching) {
  			armor.$destroy(detaching);
  		}
  	};
  }

  // (20:0) {#if article.type_id == 4}
  function create_if_block$4(ctx) {
  	var current;

  	var item = new Item$1({
  		props: { item: rul.items[ctx.article.id] },
  		$$inline: true
  	});

  	return {
  		c: function create() {
  			item.$$.fragment.c();
  		},

  		m: function mount(target, anchor) {
  			mount_component(item, target, anchor);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			var item_changes = {};
  			if (changed.rul || changed.article) item_changes.item = rul.items[ctx.article.id];
  			item.$set(item_changes);
  		},

  		i: function intro(local) {
  			if (current) return;
  			item.$$.fragment.i(local);

  			current = true;
  		},

  		o: function outro(local) {
  			item.$$.fragment.o(local);
  			current = false;
  		},

  		d: function destroy(detaching) {
  			item.$destroy(detaching);
  		}
  	};
  }

  function create_fragment$5(ctx) {
  	var h1, t0_value = ctx.article.title, t0, t1, t2, div, raw_value = ctx.article.text || "", t3, br, t4, current_block_type_index, if_block, if_block_anchor, current;

  	var sprite = new Sprite$1({
  		props: { id: ctx.article.image_id },
  		$$inline: true
  	});

  	var if_block_creators = [
  		create_if_block$4,
  		create_if_block_1$1
  	];

  	var if_blocks = [];

  	function select_block_type(ctx) {
  		if (ctx.article.type_id == 4) return 0;
  		if (ctx.article.type_id == 5) return 1;
  		return -1;
  	}

  	if (~(current_block_type_index = select_block_type(ctx))) {
  		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  	}

  	return {
  		c: function create() {
  			h1 = element("h1");
  			t0 = text(t0_value);
  			t1 = space();
  			sprite.$$.fragment.c();
  			t2 = space();
  			div = element("div");
  			t3 = space();
  			br = element("br");
  			t4 = space();
  			if (if_block) if_block.c();
  			if_block_anchor = empty();
  			h1.className = "title";
  			add_location(h1, file$4, 9, 0, 200);
  			div.className = "narrow";
  			add_location(div, file$4, 13, 0, 277);
  			add_location(br, file$4, 17, 0, 339);
  		},

  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},

  		m: function mount(target, anchor) {
  			insert(target, h1, anchor);
  			append(h1, t0);
  			insert(target, t1, anchor);
  			mount_component(sprite, target, anchor);
  			insert(target, t2, anchor);
  			insert(target, div, anchor);
  			div.innerHTML = raw_value;
  			insert(target, t3, anchor);
  			insert(target, br, anchor);
  			insert(target, t4, anchor);
  			if (~current_block_type_index) if_blocks[current_block_type_index].m(target, anchor);
  			insert(target, if_block_anchor, anchor);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			if ((!current || changed.article) && t0_value !== (t0_value = ctx.article.title)) {
  				set_data(t0, t0_value);
  			}

  			var sprite_changes = {};
  			if (changed.article) sprite_changes.id = ctx.article.image_id;
  			sprite.$set(sprite_changes);

  			if ((!current || changed.article) && raw_value !== (raw_value = ctx.article.text || "")) {
  				div.innerHTML = raw_value;
  			}

  			var previous_block_index = current_block_type_index;
  			current_block_type_index = select_block_type(ctx);
  			if (current_block_type_index === previous_block_index) {
  				if (~current_block_type_index) if_blocks[current_block_type_index].p(changed, ctx);
  			} else {
  				if (if_block) {
  					group_outros();
  					on_outro(() => {
  						if_blocks[previous_block_index].d(1);
  						if_blocks[previous_block_index] = null;
  					});
  					if_block.o(1);
  					check_outros();
  				}

  				if (~current_block_type_index) {
  					if_block = if_blocks[current_block_type_index];
  					if (!if_block) {
  						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  						if_block.c();
  					}
  					if_block.i(1);
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				} else {
  					if_block = null;
  				}
  			}
  		},

  		i: function intro(local) {
  			if (current) return;
  			sprite.$$.fragment.i(local);

  			if (if_block) if_block.i();
  			current = true;
  		},

  		o: function outro(local) {
  			sprite.$$.fragment.o(local);
  			if (if_block) if_block.o();
  			current = false;
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(h1);
  				detach(t1);
  			}

  			sprite.$destroy(detaching);

  			if (detaching) {
  				detach(t2);
  				detach(div);
  				detach(t3);
  				detach(br);
  				detach(t4);
  			}

  			if (~current_block_type_index) if_blocks[current_block_type_index].d(detaching);

  			if (detaching) {
  				detach(if_block_anchor);
  			}
  		}
  	};
  }

  function instance$5($$self, $$props, $$invalidate) {
  	

    let { article } = $$props;

  	const writable_props = ['article'];
  	Object.keys($$props).forEach(key => {
  		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Article> was created with unknown prop '${key}'`);
  	});

  	$$self.$set = $$props => {
  		if ('article' in $$props) $$invalidate('article', article = $$props.article);
  	};

  	return { article };
  }

  class Article extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance$5, create_fragment$5, safe_not_equal, ["article"]);

  		const { ctx } = this.$$;
  		const props = options.props || {};
  		if (ctx.article === undefined && !('article' in props)) {
  			console.warn("<Article> was created without expected prop 'article'");
  		}
  	}

  	get article() {
  		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set article(value) {
  		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src\App.svelte generated by Svelte v3.5.1 */

  const file$5 = "src\\App.svelte";

  function get_each_context$4(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.option = list[i];
  	return child_ctx;
  }

  function get_each_context_2(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.option = list[i];
  	return child_ctx;
  }

  function get_each_context_1$1(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.section = list[i];
  	return child_ctx;
  }

  function get_each_context_3(ctx, list, i) {
  	const child_ctx = Object.create(ctx);
  	child_ctx.section = list[i];
  	return child_ctx;
  }

  // (90:10) {#each rul.sectionsOrder as section}
  function create_each_block_3(ctx) {
  	var a, t_value = ctx.section.title, t, dispose;

  	function click_handler(...args) {
  		return ctx.click_handler(ctx, ...args);
  	}

  	return {
  		c: function create() {
  			a = element("a");
  			t = text(t_value);
  			a.className = "navbar-item";
  			add_location(a, file$5, 90, 12, 2065);
  			dispose = listen(a, "click", click_handler);
  		},

  		m: function mount(target, anchor) {
  			insert(target, a, anchor);
  			append(a, t);
  		},

  		p: function update(changed, new_ctx) {
  			ctx = new_ctx;
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(a);
  			}

  			dispose();
  		}
  	};
  }

  // (117:6) {#if !currentSection || section.id == currentSection.id}
  function create_if_block_2$1(ctx) {
  	var p, t0_value = ctx.section.title, t0, t1, ul;

  	var each_value_2 = ctx.section.articles;

  	var each_blocks = [];

  	for (var i = 0; i < each_value_2.length; i += 1) {
  		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  	}

  	return {
  		c: function create() {
  			p = element("p");
  			t0 = text(t0_value);
  			t1 = space();
  			ul = element("ul");

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}
  			p.className = "menu-label";
  			add_location(p, file$5, 117, 8, 2819);
  			ul.className = "menu-list svelte-1sspten";
  			add_location(ul, file$5, 118, 8, 2869);
  		},

  		m: function mount(target, anchor) {
  			insert(target, p, anchor);
  			append(p, t0);
  			insert(target, t1, anchor);
  			insert(target, ul, anchor);

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].m(ul, null);
  			}
  		},

  		p: function update(changed, ctx) {
  			if (changed.rul || changed.article) {
  				each_value_2 = ctx.section.articles;

  				for (var i = 0; i < each_value_2.length; i += 1) {
  					const child_ctx = get_each_context_2(ctx, each_value_2, i);

  					if (each_blocks[i]) {
  						each_blocks[i].p(changed, child_ctx);
  					} else {
  						each_blocks[i] = create_each_block_2(child_ctx);
  						each_blocks[i].c();
  						each_blocks[i].m(ul, null);
  					}
  				}

  				for (; i < each_blocks.length; i += 1) {
  					each_blocks[i].d(1);
  				}
  				each_blocks.length = each_value_2.length;
  			}
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(p);
  				detach(t1);
  				detach(ul);
  			}

  			destroy_each(each_blocks, detaching);
  		}
  	};
  }

  // (120:10) {#each section.articles as option}
  function create_each_block_2(ctx) {
  	var li, a, t_value = ctx.option.title, t, a_href_value, a_class_value;

  	return {
  		c: function create() {
  			li = element("li");
  			a = element("a");
  			t = text(t_value);
  			a.href = a_href_value = '#' + ctx.option.id;
  			a.className = a_class_value = "" + (!ctx.article || ctx.article.id != ctx.option.id ? '' : 'is-active') + " svelte-1sspten";
  			add_location(a, file$5, 121, 14, 2968);
  			add_location(li, file$5, 120, 12, 2949);
  		},

  		m: function mount(target, anchor) {
  			insert(target, li, anchor);
  			append(li, a);
  			append(a, t);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.article) && a_class_value !== (a_class_value = "" + (!ctx.article || ctx.article.id != ctx.option.id ? '' : 'is-active') + " svelte-1sspten")) {
  				a.className = a_class_value;
  			}
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(li);
  			}
  		}
  	};
  }

  // (116:4) {#each rul.sectionsOrder as section}
  function create_each_block_1$1(ctx) {
  	var if_block_anchor;

  	var if_block = (!ctx.currentSection || ctx.section.id == ctx.currentSection.id) && create_if_block_2$1(ctx);

  	return {
  		c: function create() {
  			if (if_block) if_block.c();
  			if_block_anchor = empty();
  		},

  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			insert(target, if_block_anchor, anchor);
  		},

  		p: function update(changed, ctx) {
  			if (!ctx.currentSection || ctx.section.id == ctx.currentSection.id) {
  				if (if_block) {
  					if_block.p(changed, ctx);
  				} else {
  					if_block = create_if_block_2$1(ctx);
  					if_block.c();
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}
  		},

  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);

  			if (detaching) {
  				detach(if_block_anchor);
  			}
  		}
  	};
  }

  // (136:4) {#if article}
  function create_if_block_1$2(ctx) {
  	var current;

  	var article_1 = new Article({
  		props: { article: ctx.article },
  		$$inline: true
  	});

  	return {
  		c: function create() {
  			article_1.$$.fragment.c();
  		},

  		m: function mount(target, anchor) {
  			mount_component(article_1, target, anchor);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			var article_1_changes = {};
  			if (changed.article) article_1_changes.article = ctx.article;
  			article_1.$set(article_1_changes);
  		},

  		i: function intro(local) {
  			if (current) return;
  			article_1.$$.fragment.i(local);

  			current = true;
  		},

  		o: function outro(local) {
  			article_1.$$.fragment.o(local);
  			current = false;
  		},

  		d: function destroy(detaching) {
  			article_1.$destroy(detaching);
  		}
  	};
  }

  // (140:4) {#if found}
  function create_if_block$5(ctx) {
  	var ul;

  	var each_value = ctx.found;

  	var each_blocks = [];

  	for (var i = 0; i < each_value.length; i += 1) {
  		each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
  	}

  	return {
  		c: function create() {
  			ul = element("ul");

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}
  			add_location(ul, file$5, 140, 6, 3388);
  		},

  		m: function mount(target, anchor) {
  			insert(target, ul, anchor);

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].m(ul, null);
  			}
  		},

  		p: function update(changed, ctx) {
  			if (changed.found) {
  				each_value = ctx.found;

  				for (var i = 0; i < each_value.length; i += 1) {
  					const child_ctx = get_each_context$4(ctx, each_value, i);

  					if (each_blocks[i]) {
  						each_blocks[i].p(changed, child_ctx);
  					} else {
  						each_blocks[i] = create_each_block$4(child_ctx);
  						each_blocks[i].c();
  						each_blocks[i].m(ul, null);
  					}
  				}

  				for (; i < each_blocks.length; i += 1) {
  					each_blocks[i].d(1);
  				}
  				each_blocks.length = each_value.length;
  			}
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(ul);
  			}

  			destroy_each(each_blocks, detaching);
  		}
  	};
  }

  // (142:8) {#each found as option}
  function create_each_block$4(ctx) {
  	var li, a, t0_value = ctx.option.title, t0, a_href_value, t1;

  	return {
  		c: function create() {
  			li = element("li");
  			a = element("a");
  			t0 = text(t0_value);
  			t1 = space();
  			a.href = a_href_value = '#' + ctx.option.id;
  			add_location(a, file$5, 143, 12, 3452);
  			add_location(li, file$5, 142, 10, 3435);
  		},

  		m: function mount(target, anchor) {
  			insert(target, li, anchor);
  			append(li, a);
  			append(a, t0);
  			append(li, t1);
  		},

  		p: function update(changed, ctx) {
  			if ((changed.found) && t0_value !== (t0_value = ctx.option.title)) {
  				set_data(t0, t0_value);
  			}

  			if ((changed.found) && a_href_value !== (a_href_value = '#' + ctx.option.id)) {
  				a.href = a_href_value;
  			}
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(li);
  			}
  		}
  	};
  }

  function create_fragment$6(ctx) {
  	var nav, div5, div2, div1, a, t0_value = rul.modName, t0, t1, t2_value = ctx.currentSection?": " + ctx.currentSection.title:"", t2, t3, div0, t4, div4, div3, input, t5, div9, div6, t6, div7, t7, div8, t8, current, dispose;

  	var each_value_3 = rul.sectionsOrder;

  	var each_blocks_1 = [];

  	for (var i = 0; i < each_value_3.length; i += 1) {
  		each_blocks_1[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  	}

  	var each_value_1 = rul.sectionsOrder;

  	var each_blocks = [];

  	for (var i = 0; i < each_value_1.length; i += 1) {
  		each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  	}

  	var if_block0 = (ctx.article) && create_if_block_1$2(ctx);

  	var if_block1 = (ctx.found) && create_if_block$5(ctx);

  	return {
  		c: function create() {
  			nav = element("nav");
  			div5 = element("div");
  			div2 = element("div");
  			div1 = element("div");
  			a = element("a");
  			t0 = text(t0_value);
  			t1 = text(" Pedia");
  			t2 = text(t2_value);
  			t3 = space();
  			div0 = element("div");

  			for (var i = 0; i < each_blocks_1.length; i += 1) {
  				each_blocks_1[i].c();
  			}

  			t4 = space();
  			div4 = element("div");
  			div3 = element("div");
  			input = element("input");
  			t5 = space();
  			div9 = element("div");
  			div6 = element("div");

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}

  			t6 = space();
  			div7 = element("div");
  			t7 = space();
  			div8 = element("div");
  			if (if_block0) if_block0.c();
  			t8 = space();
  			if (if_block1) if_block1.c();
  			a.className = "navbar-link";
  			add_location(a, file$5, 87, 8, 1873);
  			div0.className = "navbar-dropdown";
  			add_location(div0, file$5, 88, 8, 1976);
  			div1.className = "navbar-item has-dropdown is-hoverable";
  			add_location(div1, file$5, 86, 6, 1813);
  			div2.className = "navbar-start";
  			add_location(div2, file$5, 85, 4, 1780);
  			input.className = "input is-primary";
  			input.value = ctx.query;
  			set_style(input, "width", "500px");
  			set_style(input, "background", "black");
  			set_style(input, "color", "white");
  			attr(input, "type", "text");
  			input.placeholder = "Search query";
  			add_location(input, file$5, 101, 8, 2310);
  			div3.className = "navbar-item";
  			add_location(div3, file$5, 100, 6, 2276);
  			div4.className = "navbar-end";
  			add_location(div4, file$5, 99, 4, 2245);
  			div5.id = "navbar";
  			div5.className = "navbar-menu";
  			add_location(div5, file$5, 83, 2, 1733);
  			nav.className = "navbar is-fixed-top";
  			attr(nav, "role", "navigation");
  			attr(nav, "aria-label", "main navigation");
  			add_location(nav, file$5, 81, 0, 1649);
  			div6.className = "column is-2 is-sidebar-menu is-hidden-mobile sidebar svelte-1sspten";
  			add_location(div6, file$5, 114, 2, 2640);
  			div7.className = "column is-2";
  			add_location(div7, file$5, 132, 2, 3225);
  			div8.className = "column is-main-content main";
  			add_location(div8, file$5, 133, 2, 3255);
  			div9.className = "columns is-fullheight";
  			div9.style.cssText = "height:100%;:black;";
  			add_location(div9, file$5, 113, 0, 2574);
  			dispose = listen(input, "keyup", searchKeyUp);
  		},

  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},

  		m: function mount(target, anchor) {
  			insert(target, nav, anchor);
  			append(nav, div5);
  			append(div5, div2);
  			append(div2, div1);
  			append(div1, a);
  			append(a, t0);
  			append(a, t1);
  			append(a, t2);
  			append(div1, t3);
  			append(div1, div0);

  			for (var i = 0; i < each_blocks_1.length; i += 1) {
  				each_blocks_1[i].m(div0, null);
  			}

  			append(div5, t4);
  			append(div5, div4);
  			append(div4, div3);
  			append(div3, input);
  			insert(target, t5, anchor);
  			insert(target, div9, anchor);
  			append(div9, div6);

  			for (var i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].m(div6, null);
  			}

  			append(div9, t6);
  			append(div9, div7);
  			append(div9, t7);
  			append(div9, div8);
  			if (if_block0) if_block0.m(div8, null);
  			append(div8, t8);
  			if (if_block1) if_block1.m(div8, null);
  			current = true;
  		},

  		p: function update(changed, ctx) {
  			if ((!current || changed.currentSection) && t2_value !== (t2_value = ctx.currentSection?": " + ctx.currentSection.title:"")) {
  				set_data(t2, t2_value);
  			}

  			if (changed.rul) {
  				each_value_3 = rul.sectionsOrder;

  				for (var i = 0; i < each_value_3.length; i += 1) {
  					const child_ctx = get_each_context_3(ctx, each_value_3, i);

  					if (each_blocks_1[i]) {
  						each_blocks_1[i].p(changed, child_ctx);
  					} else {
  						each_blocks_1[i] = create_each_block_3(child_ctx);
  						each_blocks_1[i].c();
  						each_blocks_1[i].m(div0, null);
  					}
  				}

  				for (; i < each_blocks_1.length; i += 1) {
  					each_blocks_1[i].d(1);
  				}
  				each_blocks_1.length = each_value_3.length;
  			}

  			if (!current || changed.query) {
  				input.value = ctx.query;
  			}

  			if (changed.currentSection || changed.rul || changed.article) {
  				each_value_1 = rul.sectionsOrder;

  				for (var i = 0; i < each_value_1.length; i += 1) {
  					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

  					if (each_blocks[i]) {
  						each_blocks[i].p(changed, child_ctx);
  					} else {
  						each_blocks[i] = create_each_block_1$1(child_ctx);
  						each_blocks[i].c();
  						each_blocks[i].m(div6, null);
  					}
  				}

  				for (; i < each_blocks.length; i += 1) {
  					each_blocks[i].d(1);
  				}
  				each_blocks.length = each_value_1.length;
  			}

  			if (ctx.article) {
  				if (if_block0) {
  					if_block0.p(changed, ctx);
  					if_block0.i(1);
  				} else {
  					if_block0 = create_if_block_1$2(ctx);
  					if_block0.c();
  					if_block0.i(1);
  					if_block0.m(div8, t8);
  				}
  			} else if (if_block0) {
  				group_outros();
  				on_outro(() => {
  					if_block0.d(1);
  					if_block0 = null;
  				});

  				if_block0.o(1);
  				check_outros();
  			}

  			if (ctx.found) {
  				if (if_block1) {
  					if_block1.p(changed, ctx);
  				} else {
  					if_block1 = create_if_block$5(ctx);
  					if_block1.c();
  					if_block1.m(div8, null);
  				}
  			} else if (if_block1) {
  				if_block1.d(1);
  				if_block1 = null;
  			}
  		},

  		i: function intro(local) {
  			if (current) return;
  			if (if_block0) if_block0.i();
  			current = true;
  		},

  		o: function outro(local) {
  			if (if_block0) if_block0.o();
  			current = false;
  		},

  		d: function destroy(detaching) {
  			if (detaching) {
  				detach(nav);
  			}

  			destroy_each(each_blocks_1, detaching);

  			if (detaching) {
  				detach(t5);
  				detach(div9);
  			}

  			destroy_each(each_blocks, detaching);

  			if (if_block0) if_block0.d();
  			if (if_block1) if_block1.d();
  			dispose();
  		}
  	};
  }

  function goTo(id) {
    window.location.hash = "#" + id;
  }

  function searchKeyUp(e) {
    if (e.key == "Enter") {
      console.log(e.target.value);
      goTo("search:" + e.target.value);
    }
  }

  function instance$6($$self, $$props, $$invalidate) {
  	

    let article = null;
    let found = null;
    let query = "";
    let currentSection = null;

    function checkHash() {
      let hash = document.location.hash;
      if (hash) {
        if (hash.substr(0, 8) == "#search:") {
          $$invalidate('query', query = hash.substr(8));
          $$invalidate('query', query = query.replace("%20", " "));

          $$invalidate('found', found = rul.search.findArticles(query));

          $$invalidate('article', article = null);
        } else {
          $$invalidate('found', found = null);
          let id = hash.substr(1);
          if (!article || article.id != id) $$invalidate('article', article = rul.articlesById[id]);
        }
      }
      console.log(article);
      if(article){
        if(article.section)
          $$invalidate('currentSection', currentSection = article.section);
      }
    }

    function nextArticle(delta) {
      let nextArticle = rul.findNextArticle(article, delta);
      if (nextArticle) {
        goTo(nextArticle.id);
      }
    }

    document.addEventListener("keydown", event => {
      const keyName = event.key;
      if (keyName == "ArrowRight") nextArticle(1);
      if (keyName == "ArrowLeft") nextArticle(-1);
    });

    function selectSection(id){
      $$invalidate('currentSection', currentSection = rul.sections[id]);
    }

    window.onhashchange = checkHash;

    checkHash();

  	function click_handler({ section }, e) {
  		return selectSection(section.id);
  	}

  	return {
  		article,
  		found,
  		query,
  		currentSection,
  		selectSection,
  		click_handler
  	};
  }

  class App extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance$6, create_fragment$6, safe_not_equal, []);
  	}
  }

  function parseYaml(yamlText){
    let files = yamlText.split(/FILE:.*/g);
    let data = [];
    for(let file of files){
      if(file.substr(1,3) == "п»ї")
        file = file.substr(4);
      let yaml = jsYaml$1.load(file, {json: true});
      if(yaml)
        data.push(yaml);
    } 
    return data 
  }

  window.onload = function(){

    let yamlText = document.body.textContent;
    let data = parseYaml(yamlText);

    const rul = new Ruleset(data);

  	document.body.innerHTML = "";
  	document.body.style.display = "block";

  	app = new App({
  		target: document.body
    });
    
    
  };

  return app;

}());
