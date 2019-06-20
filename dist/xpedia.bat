@echo off
setlocal
CHCP 65001 >NUL

set mod_name=Piratez
set language_name=en-US

set mod_rules_path=user\mods\%mod_name%\Ruleset
set mod_language_path=user\mods\%mod_name%\Language\%language_name%.yml
set vanilla_rules_path=standard\xcom1
set vanilla_language_path=standard\xcom1\Language\%language_name%.yml
set pedia_header=xpedia\xpedia.html.header

rem echo %mod_rules_path%
rem echo %mod_language_path%
rem echo %vanilla_rules_path%
rem echo %vanilla_language_path%

>xpedia.html (
	type %pedia_header%
	
	echo FILE: xpedia
	echo {modName: %mod_name%}

	for /r %vanilla_rules_path% %%F in (*.rul) do (
		echo FILE: %%F
		type "%%F"
		echo.
	)
	
	for /r %mod_rules_path% %%F in (*.rul) do (
		echo FILE: %%F
		type "%%F"
		echo.
	)
	
	echo FILE: Language
	
	echo | set /p langTag=langv-
	type "%vanilla_language_path%"
	
	echo | set /p langTag=langm-
	type "%mod_language_path%"	
)

xpedia.html