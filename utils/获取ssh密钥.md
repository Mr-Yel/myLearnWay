https://blog.csdn.net/weixin_44394753/article/details/91410463



输入命令：ssh-keygen -t rsa -C "xxx@qq.com"

然后便一直猛击回车，有y/n的时候尽可能去翻译一下句子，而我下面这个y/n就是已经创有文件项目是否覆盖的意思。

接下来经过回车敲击后可以看到一个代码小图片，那就说明成功了。

接下来输入命令：cat ~/.ssh/id_rsa.pub

这个时候他便会弹出你的密钥。这个时候直接复制粘贴到刚刚那个GitHub设置密钥SSH的key上面然后保存即可。

Github上面的key创建完成后就可以执行git push --set-upstream origin master这条指令了。
