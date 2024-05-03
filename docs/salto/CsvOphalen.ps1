[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$wc = New-Object System.Net.WebClient
$wc.DownloadFile('https://piusx.kobam.be/public/salto/?csvkey=abc','c:\Toolbox\ToolboxImportCSV.csv')