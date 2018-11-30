import RPi.GPIO as GPIO	# 指定操作模式
import time 
GPIO.setmode(GPIO.BOARD)	# 建立通道
GPIO.setup(11, GPIO.OUT)	# 设置输出通道
for i in range(5):
	GPIO.output(11, GPIO.HIGH)	# 驱动通道
	print(GPIO.input(11))
	time.sleep(2)
	GPIO.output(11, GPIO.LOW)
	print(GPIO.input(11))
	time.sleep(2)
GPIO.clearnup(11)
	

