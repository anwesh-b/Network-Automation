from netmiko import ConnectHandler
import sys
import credentials
net_connect = ConnectHandler(**credentials.iosv_l2)
ok = net_connect.enable()
cmds = ['conf t',
        'int '+ sys.argv[1],
        sys.argv[2]]
output = net_connect.send_config_set(cmds)
