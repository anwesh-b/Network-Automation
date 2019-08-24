from netmiko import ConnectHandler

iosv_l2 = {
    'device_type': 'cisco_ios',
    'ip': '192.168.122.127',
    'username': 'asian',
    'password': 'hack',
    'secret': 'cisco'
    }
net_connect = ConnectHandler(**iosv_l2)
output = net_connect.send_command('show run')
res = output.index('interface')
end = output.index('ip forward-protocol nd')
ok =  output[res:end-3]
print(ok.split('!')[0])
print(ok.split('!')[1])
print(ok.split('!')[2])
print(ok.split('!')[3])
print(ok.split('!')[4])
print(ok.split('!')[5])