Last login: Fri Dec  9 14:08:27 on ttys006
You have mail.
☁  dashboard [master] cd /private/etc
☁  etc  ls
AFP.conf                              bashrc                                emond.d                               hosts.mamp.bak                        man.conf                              ntp-restrict.conf                     pf.conf                               rc.netboot                            sudo_lecture
afpovertcp.cfg                        bashrc_Apple_Terminal                 find.codes                            irbrc                                 manpaths                              ntp.conf                              pf.os                                 resolv.conf                           sudoers
aliases                               com.apple.screensharing.agent.launchd fstab.hd                              kern_loader.conf                      manpaths.d                            ntp_opendirectory.conf                php-fpm.conf.default                  rmtab                                 syslog.conf
aliases.db                            csh.cshrc                             ftpd.conf                             krb5.keytab                           master.passwd                         openldap                              php.ini.default                       rpc                                   ttys
apache2                               csh.login                             ftpd.conf.default                     localtime                             nanorc                                pam.d                                 postfix                               rtadvd.conf                           xtab
asl                                   csh.logout                            ftpusers                              locate.rc                             networks                              passwd                                ppp                                   security                              zprofile
asl.conf                              cups                                  gettytab                              mach_init.d                           newsyslog.conf                        paths                                 profile                               services                              zshrc
auto_home                             defaults                              group                                 mach_init_per_login_session.d         newsyslog.d                           paths.d                               protocols                             shells
auto_master                           dnsextd.conf                          hosts                                 mach_init_per_user.d                  nfs.conf                              periodic                              racoon                                snmp
autofs.conf                           efax.rc                               hosts.equiv                           mail.rc                               notify.conf                           pf.anchors                            rc.common                             ssh
☁  etc  subl .
☁  etc  subl .
☁  etc  htpasswd -bc htpasswd foo bar
Adding password for user foo.
EACCES: permission denied, open 'htpasswd'
☁  etc  cd /Users/NickMarz/sites
☁  sites  ls
!VRT                                @TestingGround                      ad-banners                          btReact                             dashboard                           gitIgnore.md                        mattasia                            project_archive                     tweeter                             yoElec
1SchwabDemo                         Lab                                 bootstrap & codekit starter project catcher                             demos                               javascript-style-guide              osm                                 schwab-electron                     wfscd
@ComradeSite                        React-For-Beginners-Starter-Files   boz_elec                            comradelabs-doc-root                eqs                                 jquery-1.7.1.js                     osm.zip                             sungevity style guide.zip           wordpress
☁  sites  cd dashboard
☁  dashboard [master] ⚡ htpasswd -bc htpasswd foo bar
Adding password for user foo.
☁  dashboard [master] ⚡ ls
CHANGELOG.md       LICENSE            Makefile           TROUBLESHOOTING.md bower.json         config.js          htpasswd           node_modules       public             test
CONTRIBUTING.md    MIGRATION.md       README.md          app.js             config             data               index.js           package.json       route              view
☁  dashboard [master] ⚡ ssh root@159.203.216.110
root@159.203.216.110's password:
You are required to change your password immediately (root enforced)
Welcome to Ubuntu 14.04.4 LTS (GNU/Linux 3.13.0-85-generic x86_64)

 * Documentation:  https://help.ubuntu.com/

  System information as of Fri Dec  9 19:56:34 EST 2016

  System load: 0.0                Memory usage: 9%   Processes:       53
  Usage of /:  16.9% of 19.56GB   Swap usage:   0%   Users logged in: 0

  Graph this data and manage this system at:
    https://landscape.canonical.com/

109 packages can be updated.
68 updates are security updates.

New release '16.04.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

Welcome to the MEAN Stack!

MEAN is a boilerplate that provides a nice starting point for MongoDB, Node.js, Express, and AngularJS based applications.
It is designed to give you quick and organized way to start developing of MEAN based web apps with useful modules like
mongoose and passport pre-bundled and configured. We mainly try to take care of the connection points between existing
popular frameworks and solve common integration problems.

You can find your mean application in /opt/mean and can run it by typing "grunt" from /opt/mean.
You can then view the sample app at http://159.203.216.110:3000

You can read more about MEAN at http://meanjs.org/
You can read more about Node.js at https://www.digitalocean.com/community/community_tags/node-js
Last login: Fri Dec  9 19:54:19 2016 from 199.21.87.198
Changing password for root.
(current) UNIX password:
Enter new UNIX password:
Retype new UNIX password:
Password unchanged
Enter new UNIX password:
Retype new UNIX password:
Bad: new password is just a wrapped version of the old one
Enter new UNIX password:
Retype new UNIX password:
Sorry, passwords do not match

Connection to 159.203.216.110 closed.
☁  dashboard [master] ⚡ ssh root@159.203.216.110
root@159.203.216.110's password:
You are required to change your password immediately (root enforced)
Welcome to Ubuntu 14.04.4 LTS (GNU/Linux 3.13.0-85-generic x86_64)

 * Documentation:  https://help.ubuntu.com/

  System information as of Fri Dec  9 19:56:47 EST 2016

  System load:  0.35               Processes:           80
  Usage of /:   16.9% of 19.56GB   Users logged in:     0
  Memory usage: 16%                IP address for eth0: 159.203.216.110
  Swap usage:   0%

  Graph this data and manage this system at:
    https://landscape.canonical.com/

109 packages can be updated.
68 updates are security updates.

New release '16.04.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

Welcome to the MEAN Stack!

MEAN is a boilerplate that provides a nice starting point for MongoDB, Node.js, Express, and AngularJS based applications.
It is designed to give you quick and organized way to start developing of MEAN based web apps with useful modules like
mongoose and passport pre-bundled and configured. We mainly try to take care of the connection points between existing
popular frameworks and solve common integration problems.

You can find your mean application in /opt/mean and can run it by typing "grunt" from /opt/mean.
You can then view the sample app at http://159.203.216.110:3000

You can read more about MEAN at http://meanjs.org/
You can read more about Node.js at https://www.digitalocean.com/community/community_tags/node-js
Last login: Fri Dec  9 19:56:48 2016 from 199.21.87.198
Changing password for root.
(current) UNIX password:
Enter new UNIX password:
Retype new UNIX password:
root@pa11y:~# npm -v
2.15.1
root@pa11y:~# ls -l
total 12856
-rw-r--r-- 1 root root 13163325 Oct 24  2014 phantomjs-1.9.8-linux-x86_64.tar.bz2
root@pa11y:~# l
phantomjs-1.9.8-linux-x86_64.tar.bz2
root@pa11y:~# ls -l
total 12856
-rw-r--r-- 1 root root 13163325 Oct 24  2014 phantomjs-1.9.8-linux-x86_64.tar.bz2
root@pa11y:~# l
phantomjs-1.9.8-linux-x86_64.tar.bz2
root@pa11y:~# ..
..: command not found
root@pa11y:~# ls
phantomjs-1.9.8-linux-x86_64.tar.bz2
root@pa11y:~# cd ..
root@pa11y:/# ls
bin  boot  dev  etc  home  initrd.img  initrd.img.old  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var  vmlinuz  vmlinuz.old
root@pa11y:/# cd ..
root@pa11y:/# ls
bin  boot  dev  etc  home  initrd.img  initrd.img.old  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var  vmlinuz  vmlinuz.old
root@pa11y:/# ls -l var/
total 40
drwxr-xr-x  2 root root   4096 Dec  6 06:49 backups
drwxr-xr-x 10 root root   4096 Dec  6 06:47 cache
drwxrwxrwt  2 root root   4096 Dec  6 06:25 crash
drwxr-xr-x 44 root root   4096 Dec  6 06:47 lib
drwxrwsr-x  2 root staff  4096 Apr 10  2014 local
lrwxrwxrwx  1 root root      9 Apr 17  2014 lock -> /run/lock
drwxrwxr-x 10 root syslog 4096 Dec  9 19:56 log
drwxrwsr-x  2 root mail   4096 Apr 16  2014 mail
drwxr-xr-x  2 root root   4096 Apr 16  2014 opt
lrwxrwxrwx  1 root root      4 Apr 17  2014 run -> /run
drwxr-xr-x  5 root root   4096 Apr 17  2014 spool
drwxrwxrwt  2 root root   4096 Apr 13  2016 tmp
root@pa11y:/# ls -l var/opt/
total 0
root@pa11y:/# ls -l var/lib
total 168
drwxr-xr-x 4 root    root    4096 Apr 17  2014 AccountsService
drwxr-xr-x 3 root    root    4096 Apr 17  2014 apparmor
drwxr-xr-x 6 root    root    4096 Dec  5 18:19 apt
drwxr-xr-x 2 root    root    4096 Jul 23  2014 aptitude
drwxr-xr-x 2 root    root    4096 Dec  9 06:54 apt-xapian-index
drwxr-xr-x 2 root    root    4096 Dec  5 14:50 belocs
drwxr-xr-x 8 root    root    4096 Dec  9 19:56 cloud
drwxr-xr-x 2 root    root    4096 Apr 17  2014 dbus
drwxr-xr-x 2 root    root    4096 Apr 17  2014 dhcp
drwxr-xr-x 7 root    root    4096 Dec  5 18:19 dpkg
drwxr-xr-x 3 root    root    4096 Apr 29  2016 gems
drwxr-xr-x 2 root    root    4096 Mar 21  2016 git
drwxr-xr-x 2 root    root    4096 Apr 13  2016 initramfs-tools
drwxr-xr-x 2 root    root    4096 Mar 12  2014 initscripts
drwxr-xr-x 2 root    root    4096 Mar 12  2014 insserv
drwxr-xr-x 2 root    root    4096 Mar 28  2014 landscape
drwxrwsr-x 2 libuuid libuuid 4096 Apr 16  2014 libuuid
drwxr-xr-x 3 root    root    4096 Apr 17  2014 locales
drwxr-xr-x 2 root    root    4096 Dec  9 06:54 logrotate
drwxr-xr-x 2 root    root    4096 Oct  9  2014 man-db
drwxr-xr-x 2 root    root    4096 Apr 10  2014 misc
drwxr-xr-x 2 root    root    4096 Dec  9 06:54 mlocate
drwxr-xr-x 3 mongodb mongodb 4096 Dec  9 19:56 mongodb
drwxr-xr-x 2 root    root    4096 Oct  9  2013 ntpdate
drwxr-xr-x 2 root    root    4096 Feb 13  2014 os-prober
drwxr-xr-x 2 root    root    4096 Apr 13  2016 pam
drwxr-xr-x 2 root    root    4096 Apr 17  2014 plymouth
drwx------ 3 root    root    4096 Apr 17  2014 polkit-1
drwxr-xr-x 2 root    root    4096 Apr 17  2014 python
drwxr-xr-x 2 root    root    4096 Apr 17  2014 sgml-base
drwxr-xr-x 2 root    root    4096 Feb 10  2014 sudo
drwxr-xr-x 3 root    root    4096 Apr 17  2014 systemd
drwxr-xr-x 2 root    root    4096 Dec 10  2015 ubuntu-release-upgrader
drwxr-xr-x 3 root    root    4096 Sep 24  2014 ucf
drwxr-xr-x 2 root    root    4096 Apr 17  2014 update-manager
drwxr-xr-x 4 root    root    4096 Apr 17  2014 update-notifier
drwxr-xr-x 2 root    root    4096 May 18  2013 update-rc.d
drwxr-xr-x 2 root    root    4096 Apr 17  2014 urandom
drwxr-xr-x 3 root    root    4096 Oct  2  2014 ureadahead
drwxr-xr-x 2 root    root    4096 Apr 13  2016 usbutils
drwxr-xr-x 3 root    root    4096 Apr 17  2014 vim
drwxr-xr-x 2 root    root    4096 Apr 17  2014 xml-core
root@pa11y:/# ls
bin  boot  dev  etc  home  initrd.img  initrd.img.old  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var  vmlinuz  vmlinuz.old
root@pa11y:/# ls -l b
ls: cannot access b: No such file or directory
root@pa11y:/# ls -l boot
total 58980
-rw-r--r-- 1 root root  1165513 Feb 19  2016 abi-3.13.0-79-generic
-rw-r--r-- 1 root root  1165952 Mar 17  2016 abi-3.13.0-85-generic
-rw-r--r-- 1 root root   165918 Feb 19  2016 config-3.13.0-79-generic
-rw-r--r-- 1 root root   165918 Mar 17  2016 config-3.13.0-85-generic
drwxr-xr-x 5 root root     4096 Apr 13  2016 grub
-rw-r--r-- 1 root root 19350739 Feb 23  2016 initrd.img-3.13.0-79-generic
-rw-r--r-- 1 root root 19368259 Apr 13  2016 initrd.img-3.13.0-85-generic
-rw-r--r-- 1 root root   176500 Mar 12  2014 memtest86+.bin
-rw-r--r-- 1 root root   178176 Mar 12  2014 memtest86+.elf
-rw-r--r-- 1 root root   178680 Mar 12  2014 memtest86+_multiboot.bin
-rw------- 1 root root  3393574 Feb 19  2016 System.map-3.13.0-79-generic
-rw------- 1 root root  3394208 Mar 17  2016 System.map-3.13.0-85-generic
-rw------- 1 root root  5828256 Feb 19  2016 vmlinuz-3.13.0-79-generic
-rw------- 1 root root  5833568 Mar 17  2016 vmlinuz-3.13.0-85-generic
root@pa11y:/# ls -l opt
total 8
drwxr-xr-x 10 root root 4096 Dec  5 14:56 dashboard
drwxr-xr-x  9 root root 4096 Apr 29  2016 mean
root@pa11y:/# ls -l opt/dashboard/
total 116
-rw-r--r--  1 root root  3989 Dec  5 14:55 app.js
-rw-r--r--  1 root root   124 Dec  5 14:55 bower.json
-rw-r--r--  1 root root  6373 Dec  5 14:55 CHANGELOG.md
drwxr-xr-x  2 root root  4096 Dec  5 15:06 config
-rw-r--r--  1 root root  1590 Dec  5 14:55 config.js
-rw-r--r--  1 root root   886 Dec  5 14:55 CONTRIBUTING.md
drwxr-xr-x  2 root root  4096 Dec  5 14:55 data
-rw-r--r--  1 root root  1760 Dec  5 14:55 index.js
-rw-r--r--  1 root root 35146 Dec  5 14:55 LICENSE
-rw-r--r--  1 root root  1559 Dec  5 14:55 Makefile
-rw-r--r--  1 root root   533 Dec  5 14:55 MIGRATION.md
drwxr-xr-x 22 root root  4096 Dec  5 14:56 node_modules
-rw-r--r--  1 root root  1227 Dec  5 14:55 package.json
drwxr-xr-x  6 root root  4096 Dec  5 14:55 public
-rw-r--r--  1 root root  6970 Dec  5 14:55 README.md
drwxr-xr-x  4 root root  4096 Dec  5 14:55 route
drwxr-xr-x  3 root root  4096 Dec  5 14:55 test
-rw-r--r--  1 root root  1004 Dec  5 14:55 TROUBLESHOOTING.md
drwxr-xr-x  8 root root  4096 Dec  5 14:55 view
root@pa11y:/# cd opt/dashboard/
root@pa11y:/opt/dashboard# packet_write_wait: Connection to 159.203.216.110: Broken pipe
☁  dashboard [master] ⚡ ssh root@159.203.216.110
root@159.203.216.110's password:
Welcome to Ubuntu 14.04.4 LTS (GNU/Linux 3.13.0-85-generic x86_64)

 * Documentation:  https://help.ubuntu.com/

  System information as of Fri Dec  9 20:01:27 EST 2016

  System load:  0.0                Processes:           78
  Usage of /:   16.9% of 19.56GB   Users logged in:     1
  Memory usage: 17%                IP address for eth0: 159.203.216.110
  Swap usage:   0%

  Graph this data and manage this system at:
    https://landscape.canonical.com/

109 packages can be updated.
68 updates are security updates.

New release '16.04.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

Welcome to the MEAN Stack!

MEAN is a boilerplate that provides a nice starting point for MongoDB, Node.js, Express, and AngularJS based applications.
It is designed to give you quick and organized way to start developing of MEAN based web apps with useful modules like
mongoose and passport pre-bundled and configured. We mainly try to take care of the connection points between existing
popular frameworks and solve common integration problems.

You can find your mean application in /opt/mean and can run it by typing "grunt" from /opt/mean.
You can then view the sample app at http://159.203.216.110:3000

You can read more about MEAN at http://meanjs.org/
You can read more about Node.js at https://www.digitalocean.com/community/community_tags/node-js
Last login: Fri Dec  9 20:01:27 2016 from 199.21.87.198
root@pa11y:~# cd ..
root@pa11y:/# ls
bin  boot  dev  etc  home  initrd.img  initrd.img.old  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var  vmlinuz  vmlinuz.old
root@pa11y:/# cd opt/
root@pa11y:/opt# ls
dashboard  mean
root@pa11y:/opt# cd dashboard/
root@pa11y:/opt/dashboard# ls
app.js  bower.json  CHANGELOG.md  config  config.js  CONTRIBUTING.md  data  index.js  LICENSE  Makefile  MIGRATION.md  node_modules  package.json  public  README.md  route  test  TROUBLESHOOTING.md  view
root@pa11y:/opt/dashboard# htpasswd -bc htpasswd comrade pr3view!
Adding password for user comrade.
root@pa11y:/opt/dashboard# vi package.json
root@pa11y:/opt/dashboard# ls
app.js      CHANGELOG.md  config.js        data      index.js  Makefile      node_modules  public     route  TROUBLESHOOTING.md
bower.json  config        CONTRIBUTING.md  htpasswd  LICENSE   MIGRATION.md  package.json  README.md  test   view
root@pa11y:/opt/dashboard# ls -l data/
total 92
-rw-r--r-- 1 root root 91893 Dec  5 14:55 standards.js
root@pa11y:/opt/dashboard# .
-bash: .: filename argument required
.: usage: . filename [arguments]
root@pa11y:/opt/dashboard# vim htpasswd
root@pa11y:/opt/dashboard# vim app.js

// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

'use strict';

const bodyParser = require('body-parser');
const compression = require('compression');
const createClient = require('pa11y-webservice-client-node');
const EventEmitter = require('events').EventEmitter;
const express = require('express');
const hbs = require('express-hbs');
const http = require('http');
const pkg = require('./package.json');

module.exports = initApp;

// Initialise the application
function initApp(config, callback) {
        config = defaultConfig(config);

        let webserviceUrl = config.webservice;
        if (typeof webserviceUrl === 'object') {
                webserviceUrl = `http://${webserviceUrl.host}:${webserviceUrl.port}/`;
        }

        const app = new EventEmitter();
        app.address = null;
        app.express = express();
        app.server = http.createServer(app.express);
        app.webservice = createClient(webserviceUrl);

        // Compression
        app.express.use(compression());

        // Public files
        app.express.use(express.static(`${__dirname}/public`, {
                maxAge: (process.env.NODE_ENV === 'production' ? 604800000 : 0)
        }));

        // General express config
        app.express.disable('x-powered-by');
                                                                                                                                                                                          1,1           Top
