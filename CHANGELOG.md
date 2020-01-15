1.1.0

Mostly optimisation and mobile support, some bug fixes

* a lot of improvements for xpedia.js
* xpedia.bat is deprecated
* better (multi)language support (very similar to kato-guardian's)
* better support for mobile
* removed bulmaswatch.min.css
* removed jsZip, replaced with pako (jsZip was bigger, slower and bugge in Chrome debug mode)

1.1.1

* extra_rul field added to config.json. It allows adding your own .rul-es, such as new articles and sections etc.
* Tooltips added to table fields (currently items and craft). If you have tip_fieldname string, it will show it as a tip
* scss is now used for making styling. It allows making different themes, among other things
* 0.png (empty image) is now shown for missing images.