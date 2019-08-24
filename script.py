from netmiko import ConnectHandler
iosv_l2 = {
    'device_type': 'cisco_ios',
    'ip': '192.168.122.127',
    'username': 'asian',
    'password': 'hack',
}
net_connect = ConnectHandler(**iosv_l2)
output = net_connect.send_command('show ip int brief')
result = output.index('FastEthernet0/0')
print (output[result:result+60])