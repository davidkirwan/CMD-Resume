// Splash message
var splash = `
                                                                     ..;===+.
                                            .                     .:=iiiiii=+=
                                                               .=i))=;::+)i=+,
                                                            ,=i);)I)))I):=i=;
           .                                             .=i==))))ii)))I:i++
                                                       +)+))iiiiiiii))I=i+:\'
                                  .,:;;++++++;:,.       )iii+:::;iii))+i=\'
                               .:;++=iiiiiiiiii=++;.    =::,,,:::=i));=+\'
                             ,;+==ii)))))))))))ii==+;,      ,,,:=i))+=:
                           ,;+=ii))))))IIIIII))))ii===;.    ,,:=i)=i+
                          ;+=ii)))IIIIITIIIIII))))iiii=+,   ,:=));=,
                        ,+=i))IIIIIITTTTTITIIIIII)))I)i=+,,:+i)=i+
                       ,+i))IIIIIITTTTTTTTTTTTI))IIII))i=::i))i=\'
                      ,=i))IIIIITLLTTTTTTTTTTIITTTTIII)+;+i)+i\`
                      =i))IIITTLTLTTTTTTTTTIITTLLTTTII+:i)ii:\'
                     +i))IITTTLLLTTTTTTTTTTTTLLLTTTT+:i)))=,
                     =))ITTTTTTTTTTTLTTTTTTLLLLLLTi:=)IIiii;
     .              .i)IIITTTTTTTTLTTTITLLLLLLLT);=)I)))))i;
                    :))IIITTTTTLTTTTTTLLHLLLLL);=)II)IIIIi=:
                    :i)IIITTTTTTTTTLLLHLLHLL)+=)II)ITTTI)i=                     .
                    .i)IIITTTTITTLLLHHLLLL);=)II)ITTTTII)i+
                    =i)IIIIIITTLLLLLLHLL=:i)II)TTTTTTIII)i\'
                  +i)i)))IITTLLLLLLLLT=:i)II)TTTTLTTIII)i;    .
                +ii)i:)IITTLLTLLLLT=;+i)I)ITTTTLTTTII))i;
               =;)i=:,=)ITTTTLTTI=:i))I)TTTLLLTTTTTII)i;
             +i)ii::,  +)IIITI+:+i)I))TTTTLLTTTTTII))=,
           :=;)i=:,,    ,i++::i))I)ITTTTTTTTTTIIII)=+\'
         .+ii)i=::,,   ,,::=i)))iIITTTTTTTTIIIII)=+
        ,==)ii=;:,,,,:::=ii)i)iIIIITIIITIIII))i+:\'
       +=:))i==;:::;=iii)+)=  \`:i)))IIIII)ii+\'
     .+=:))iiiiiiii)))+ii;
    .+=;))iiiiii)));ii+
   .+=i:)))))))=+ii+
  .;==i+::::=)i=;                .
  ,+==iiiiii+,
  \`+=+++;\`


`;

// Details
var name = "David Kirwan";
var loc = "Waterford City, Ireland.";

var introduction = `
Hi my name is David Kirwan, I am a recent computing postgraduate from the Waterford Institute of Technology, and currently based in Waterford City, Ireland. I am an avid supporter of open source software / hardware and I have huge interest in STEM/STEAM(A - Art) fields in general. I'm particularly Interested in the maker movement, where I enjoy building interactive prototypes using embedded system such as Arduino and Raspberry Pi. I'm a member of the local makerspace the South East Makerspace (SEMS) and have been involved in several projects. See the [[b;#ffffff;#000]projects] command for a list of my projects.

Time permitting, I also like to get involved in amateur astronomy and amateur radio. I maintain a 20.1MHz dual dipole antenna array and software defined radio receiver (HackRF), which can be configured for both local and non-terrestrial receiving. I hope to pass my amateur radio licence exam in 2016. In the near future I hope to pursue a Ph.D program in an Astronomy/Computing field.
`;

var lookingfor = "I'm looking for an opportunity to join and work with an enthusastic team implementing cutting edge technologies in a computing related field.";
var contact = " If you would like to get in contact with me, you can access a PDF version of this resume, through the [[b;#ffffff;#000]pdf] command.";
var pdfLink = "https://dl.dropboxusercontent.com/u/19443068/david_kirwan_resume_2016_03_05.pdf";

// Settings
var showForks = true;

// Github and Bitbucket accounts
var githubUsername = "davidkirwan";
var bitbucketUsername = "dkirwan";
var githubURL = "https://github.com/" + githubUsername;
var bitbucketURL = "https://bitbucket.org/" + bitbucketUsername;

// If left blank e.g. url = "" then it won't appear
var websiteURL = "http://donttase.me";
var blogURL = "http://donttase.me/blog";
var linkedinURL = "http://donttase.me/linkedin";
var portfolioURL = "";
var twitterURL = "https://twitter.com/kirwan_david";
var facebookURL = "";
var skypeAccount = "";
var toxId = "CEA5C8604C21C1D16D2BA995C62B79917E04130403868AA316FC50C74FB385258382A2E1B9DA";
var socialMedia = [
    ["Bitbucket", bitbucketURL],
    ["Blog", blogURL],
    ["Facebook", facebookURL],
    ["Github", githubURL],
    ["LinkedIn", linkedinURL],
    ["Portfolio", portfolioURL],
    ["Skype", skypeAccount],
    ["Twitter", twitterURL],
    ["Tox", toxId],
    ["Website", websiteURL]
];

// Education list
var education = [
    ["Waterford Institute of Technology", "Master of Science (Communication Software)", "Graduated September, 2015"],
    ["Waterford Institute of Technology", "Bachelor of Science (Applied Computing)", "Graduated June, 2013"]
];

// Employment list
var employment = [
    ["TSSG", "Software Researcher & Engineer", "June 2013 - Present"]
];

// Volunteering list
var volunteering = [
    ["Mentor", "Coder Dojo Waterford", "2012 - 2014"]
];

// Projects which I have been involved in
var projects = [
    ["Paste", "A simple pastebin/gist clone", "https://github.com/davidkirwan/sinatra_paste"],
    ["SDRTelescope", "A cheap design for a software defined radio telescope", "https://github.com/davidkirwan/software_defined_radio_telescope"],
    ["Floppy Octet", "Musical instrument floppy drive midi player", "https://wiki.southeastmakerspace.org/projects/floppy_drive_midi/start"],
    ["Morse", "Text to morse code audio generator", "https://github.com/davidkirwan/sinatra_morse", "Demo: http://donttase.me/morse"],
    ["Ardtweeno", "PaaS Gateway to bridge serial to TCP/IP", "https://github.com/davidkirwan/ardtweeno"],
    ["AirfishBowl", "Autonomous Helium Blimp collaboratively developed at WIT 2013 ", "https://github.com/ElectronicsWIT/AirFishBowl"],
    ["UsefulDB", "A simple database to store information about useful commands or URLs", "https://github.com/davidkirwan/usefuldb-gem"],
    ["libretalk", "Android Chat client developed during the 2013/2014 Waterford Coderdojo class", "https://github.com/coderdojowaterford/libretalk"],
    ["Eve Online Galaxy", "webgl prototype built using three.js", "https://github.com/davidkirwan/InternetSpaceships", "Demo: http://donttase.me/webgl-prototype/index.html"],
    ["Asciidoc2html-pdf", "TSSG 3MT Documentation Toolchain for building styled HTML and PDF documents", "https://github.com/TSSG/asciidoc2html-pdf"]
];

// Skills list
var skillsLanguages = [
    ["Android", "Bash", "C", "C++", "C#", "Objective C", "iOS", "Java", "Javascript", "PHP", "Python", "Ruby on Rails", "Ruby", "R"]
];

var skillsTools = [
    ["Ansible", "AWS", "Cucumber", "Capistrano", "Cassandra", "Chef", "Git", "Gitlab", "gerrit", "HAProxy", "Heroku", "Jenkins", "Jira", "Linux", "MongoDB", "MySQL", "OpenStack", "Puppet", "rspec", "Storm", "SVN", "TravisCI", "Vagrant", "Zabbix"]
];

var skillsConcepts = [
    ["Agile Software Engineering", "Continuous Integration", "Design Patterns", "Functional Testing", "Project Management", "System Architecture", "Functional Programming"]
];

var publicPGPkey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2

mQINBEwxV6MBEADnJOzNN/x70VDNRyuBCYbep/Qb94IAWDGwcE3TytdzdzssWyBu
YWs+UfOagRI+kYO5h3CM63vTZLtyl8371rfJAlw7LkWj2BZEmGikqh/322jg+kfU
3MZ/MJYGksDU5YYw2eo2JRcc9XZe7UQ/E1Mk5QbYDQr+JpWkfDedCn4rWFQkNGkP
wewsHJHq+BuhwTe2ITEh8TbPPU8iPrnZnfvEef82VBJksQnE5hJQ3csQTGScOss+
0EWIyR1N98YJlLPh8PByE9Fi0K7euWutBCidLuwREmAd/iZ4MOzXMFfKHCzHhTya
olYdCLgQ+qrGoCNvfb9zaIliJePk9W9ohDf7e86laECfjGAH96p9apnXS09amYGT
h8E2ob4BFaGipKb7kedVXl6j7tv2pbjeLAN/2PEQD5zR6su0gi6iPyOq+rDesUy3
MhCd7tu+4cMWJBEwNQY6Jy+E1OAi2OtJQBrTQ+fvmzpl3MCY/ja1rK+h8tQZ9DJ5
NakXU1f3E3nUi8xqmWkxNM+dmyU6ukpTdvokNKCgmMCU3R0vbHVMSmRw0fseXsFW
qgB4x+lrteVfh5ZuyTWd52af8gtk/dU3Zzpbk9IG/O68ZKNccUJxRVnuquDZto3Q
9dcgV3waAoG29r4dCSBfD8MxRC5jPWqbRorZyTollreIQIpNWvxIT/JZCwARAQAB
tCFEYXZpZCBLaXJ3YW4gPG1hbW9saWFuQGdtYWlsLmNvbT6JAnIEEAECAFwwFIAA
AAAAIAAHcHJlZmVycmVkLWVtYWlsLWVuY29kaW5nQHBncC5jb21wZ3BtaW1lAhkB
BRsDAAAABR4BAAAABQJPJdapBgsJCAcDAgYVCAIJCgsEFgIDAQIXgAAKCRCliTq2
R0rDfVWpEADCZTne0sKj048flsW29rlpRXneUgXGZAS3nPD2tSLzYwSRH7HkfFu/
iL9CGPnA71RPIY9wNEAnTNf3g3yz7loiDp4xgi0WHJ1j398IWvJQ/sMJZ5ntofPX
1GIb/CTJTjoiLIaysU/kCoWRbz4rxDdoJuHiMf5E7YEPyBNFmYAZzwhTVBU9tWf7
bGiMqRQz7uXJzdFjdOhMJj84+idFNo+hIpAL+qyaWegrIKAX9JwzHGvxfPN7GnFo
kmBWICi5sWs1cLSD8b8njojaIIHXe6GXpsuHlHcGsUNjYP3os5VT3moz64eST0IY
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
Ozs7Ozs7Ozv/wAARCAB6AG4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAA
AAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1Fh
ByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdI
SUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm
p6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3
+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQD
BAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYk
NOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3
eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK
0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1Cq99ewad
Yz3ty22KBC7HjoOwz3qxXFfEu8H9mWulpIyvcy+ZIAeDGgOQfqxXH0NZwjzSsbSd
lc7C2nS6tYrmPOyZA6564IyKlrO8Pyibw7psgIObWPOD32jI/OtGk1ZjWwUVjah4
t0TTiEkv45pmyBDbnzHOPYdOvfFZs3jyIx5s9IvZmz/y02xjH1yT+lXGlOWyIlUh
HdnV0VxR+IFyh+bQWA9rof8AxNSQfEWzJYXmm3cGOhTbID+opujUXQlVqb2Zq6L4
pttY1jVNJ8vybrTpSpUuD5qZxvHQ9RgjHGRyc1uV893evPZeP5tetPMVftbSLvBX
chPKkehB5r6At54rq3iuIW3xSoHRsYypGQamceUuMrklFFFQUFFFFABXmvjadLrx
TNEmd1raxo2fVizcfgVr0qvMvEcav4r1fH3sxA/9+lrfDq8znxMuWmafhXxXp2le
D3fVLuKH7FI6rHuHmOpwwwucnliPTj6mubvvHGo+KmZVZtN01WxshciSXIxhm9Ov
AA685rkNfg2yLMBjHFUW1CUGMRfIkeCF9T71o4qM22ZqU501ys9Fs0t4I9tvEqA/
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
g/o2T0+Ji3dWZ14UBSAUVnNoUqDrO36i
=D721
-----END PGP PUBLIC KEY BLOCK-----
`;
