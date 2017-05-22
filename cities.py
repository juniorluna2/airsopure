#!/usr/bin/python

import csv
import zipcode

def main():

	matchCount=0

	# read cities_final.txt
	f=open('cities.txt','r')
	row=f.readlines()

	# read first cities file
	g=open('zipcode-state-county-cities.txt','r')
	row2=csv.reader(g)

	# create final cities file with zipcode,state,county,city
	h=open('cities_final.txt','w')

	# open lat,lng csv file
	z=open('zcLatLng.csv','r')
	row3=csv.reader(z)

	# file for list of urls
	w=open('urls.txt','w')

	# loop through john's file
	for i in row:
		# strip character
		temp=i.rstrip('\n')

		# loop through original file
		for j in row2:
			if temp==j[3]:
				matchCount+=1 # must equal 281
				# find lat,lng
				for k in row3:
					# match zipcode
					if j[0]==k[0]:
						h.write('%s,%s,%s,%s,%s,%s\n' % (j[0],j[1],j[2],j[3],k[1],k[2]))
				break

		# start original file at top
		g.seek(0)
		z.seek(0)

	# close all open files
	f.close()
	g.close()
	h.close()

	# debug
	print matchCount

	# create web pages
	# read final file
	d=open('cities_final.txt','r')
	row4=csv.reader(d)

	# open html template
	c=open('air-duct-cleaning-farmington-org.html','r')
	row5=c.readlines()

	# loop through each file to create the new web pages
	count=0
	for l in row4:
		# create url and add to urls.txt file
		# remove whitespaces
		temp2=l[3].replace(" ","-")
		b=open('air-duct-cleaning-%s.html' % (temp2.lower()),'w')
		w.write('air-duct-cleaning-%s.html\n' % (temp2.lower()))

		for i,m in enumerate(row5):
			if i==17:
				b.write("""    <META NAME="keywords" content="air duct cleaning, duct cleaning, airsopure air duct cleaning, duct cleaners, air duct cleaing michigan, air duct cleaning %s, air duct cleaning %s michigan, residental air duct cleaning, residental duct cleaning">""" % (l[3].lower(),l[3].lower()))
			elif i==240:
				b.write("""          <h1>Air Duct Cleaning</br>%s, MI</h1>""" % (l[3]))
			elif i==250:
				b.write("""                  var location = new google.maps.LatLng(%f,%f);""" % (float(l[4]),float(l[5])))
			else:
				b.write(m)

		# close new html file
		b.close()
		# start from top of html file
		c.seek(0)

	# close urls.txt
	w.close()

if __name__ == "__main__":
	main()