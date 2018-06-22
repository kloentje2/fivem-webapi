# fivem-webapi

## How to install?

1. Open CMD or a similar Command Line Interface
2. Make sure that you are in the working directory, I advise you to create a new directory
3. Excecute this install command: *git clone https://github.com/kloentje2/fivem-webapi.git* en press <Enter>
(Don't leave the working directory or close the command line!)
4. Excecute the install command: *npm install*
5. Open the file app.js in your plain-text editor and change the variable key to a random string that you can remember
6. Also change the port to something you want. Be sure to open it in the firewall/router when you want to open it form outside the network
7. Run *node app.js* in the Command Line and hit <Enter>

The console shoud show "Running on port x" (x = your chosen port)
  
When you are done with the steps above you can navigate to http://server-ip:port/ in your browser. On that page the commands are listed 

http://server-ip:port/start<br>
http://server-ip:port/stop<br>
http://server-ip:port/restart<br>

When you want to use one of these functions you need to use the API Key that you've changed.<br>
You can use the key as a URL query 

http://server-ip:port/start?key=123456<br>
http://server-ip:port/stop?key=123456<br>
http://server-ip:port/restart?key=123456<br>

Without using the key you won't be able to perform the action

## Requirements

- NodeJS 8.9.4 (You can try lower, but i've tested it on this version)
- Windows Server 2012 R2(Every recent Windows Server/Client Version should work, but i've tested it on this version)
- Access to the Windows Firewall
