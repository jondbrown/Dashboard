from django.shortcuts import render
from django.http import HttpResponse
from collections import OrderedDict, defaultdict
import pandas as pd
import numpy as np
import dash.utils.dataframeSlicer as ds
from dash.utils.summaryStats import frameStats
import dash.utils.productGrabber as pg
# Create your views here.

def index(request):
	return render(request, 'examples.html')

def cust(request, cust_id):
	frame = ds.getFrame()
	# filter dataframe
	frame = ds.getCustomer(frame, cust_id)
	frame = frame.sort_values('created_date_sk', ascending=False)
	grades = pg.getGrades(frame)
	mfgGrades, grade = pg.getProducts(frame)
	dictionary = ds.getDict(frame)

	stats = frameStats(frame)

	# print(dictionary)
	return render(request, 'index.html', {'data': dictionary, 'stats':stats.getStatDict(),
	'cust':cust_id, 'grades':grades, 'mfgGrades':mfgGrades, 'grade':grade })

def custGroup(request, cust_id, group):
	frame = ds.getFrame()
	# filter dataframe
	frame = ds.getCustomer(frame, cust_id)
	elixirGrades = pg.getGrades(frame)
	frame = ds.getGroup(frame, group)
	mfgGrades, grade = pg.getProducts(frame)
	frame = frame.sort_values('created_date_sk', ascending=False)
	
	dictionary = ds.getDict(frame)

	stats = frameStats(frame)

	# print(dictionary)
	return render(request, 'index.html', {'data': dictionary, 'stats':stats.getStatDict(),
	'cust':cust_id, 'grades':elixirGrades, 'mfgGrades':mfgGrades, 'grade':grade })

def custGroupGrade(request, cust_id, group, grade):
	frame = ds.getFrame()
	# filter dataframe
	frame = ds.getCustomer(frame, cust_id)
	elixirGrades = pg.getGrades(frame)
	frame = ds.getGroup(frame, group)
	mfgGrades, elixerGrade = pg.getProducts(frame)
	frame = ds.getGrade(frame, grade)
	frame = frame.sort_values('created_date_sk', ascending=False)
	
	dictionary = ds.getDict(frame)

	stats = frameStats(frame)

	# print(dictionary)
	return render(request, 'index.html', {'data': dictionary, 'stats':stats.getStatDict(),
	'cust':cust_id, 'grades':elixirGrades, 'mfgGrades':mfgGrades, 'grade':elixerGrade })
