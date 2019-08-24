from netmiko import ConnectHandler
import json

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
ok =  output[res:end-3].split('!')
for i in range(5):
    print(ok[i])
    json.dump(res, str(i), indent=4)
# with open('./int.json', 'w') as f:
#             print("Dumping {} movies".format(len(data)))
#             json.dump(f)