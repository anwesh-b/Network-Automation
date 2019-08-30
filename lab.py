from netmiko import ConnectHandler
import json

iosv_l2 = {
    'device_type': 'cisco_ios',
    'ip': '192.168.122.127',
    # 'ip': '192.168.122.127',
    'username': 'asian',
    'password': 'hack',
    'secret': 'cisco'
    }
net_connect = ConnectHandler(**iosv_l2)
output = net_connect.send_command('show run')
res = output.index('interface')
end = output.index('ip forward-protocol nd')
ok =  output[res:end-3].split('!')
final = []
for i in range(len(ok)):
    # test = ok[i].split("\n")
    # final += test 
    print ok[i][10:25]
    a = ok[i].find('shutdown')
    c = ok[i].find('no ip address')
    b = (a==-1) and 'No Shut' or 'Shut'
    if(c==-1):
        if(ok[i].find('ip address dhcp')==-1):
            d = ok[i][38:50]
        else:
            d = 'DHCP'
    else:
        d = 'No Ip Address' 
    # d = (c==-1) and ok[25:45] or 'No Ip' 
    final.insert(500,b)
    final.insert(500,d)
    # final = x.append(d)
print (final)
wr = open('./int.json','w')
a = json.dumps(final)
# print (a)
wr.write(a)
wr.close()