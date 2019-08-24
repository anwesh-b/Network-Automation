from netmiko import ConnectHandler

iosv_l2 = {
    'device_type': 'cisco_ios',
    'ip': '192.168.122.182',
    'username': 'anwesh',
    'password': 'cisco',
    'secret': 'cisco'
    }
net_connect = ConnectHandler(**iosv_l2)
ok = net_connect.enable()
cmds = ['conf t',
        'int fa0/0',
        'no sh',
        'ip address dhcp']
output = net_connect.send_config_set(cmds)
