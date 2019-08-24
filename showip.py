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
output = net_connect.send_command('show ip int brief '+sys.argv[1])
print (output[85:127])
