from netmiko import ConnectHandler
import sys

iosv_l2 = {
    'device_type': 'cisco_ios',
    'ip': '192.168.122.127',
    'username': 'asian',
    'password': 'hack',
    'secret': 'cisco'
    }
net_connect = ConnectHandler(**iosv_l2)
ok = net_connect.enable()
cmds = ['conf t',
        'int '+ sys.argv[1],
        'ip address 192.168.1.1 255.255.255.0',
        'no sh']
output = net_connect.send_config_set(cmds)
