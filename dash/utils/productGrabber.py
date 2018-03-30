import pandas as pd

gradeDict = {'PLAT':'Plate', 'CUP':'Cup', 'FCRT':'Folding Carton', 'LBRD':'Linerboard'}

def getGrades(frame):
	grades = frame['elixir_grade_group'].unique()
	result = {g: gradeDict[g] for g in grades}

	return result

def getProducts(frame):
	mfgGrades = frame['mfg_grade_bb_sk_x'].unique()
	newFrame = frame[frame['mfg_grade_bb_sk_x'].isin(mfgGrades)].sort_values('mfg_grade_bb_sk_x')
	result = {}
	for item in mfgGrades:
		result[item] = newFrame[newFrame['mfg_grade_bb_sk_x']==item].iloc[0]['mfg_grade_desc']
		

	grade = newFrame.iloc[0]['elixir_grade_group']
	return result, grade
    