# module for slicing up customer dataframes
import pandas as pd

# Reads pickle file
def getFrame():
    return pd.read_pickle("F:/FinalPickles/final1.pkl")

# Removes all customers but one
def getCustomer(frame, cust_id):
    return frame[frame['corp_customer_location_bb_sk']==cust_id]

# Removes all elixir_grade_groups but one
def getGroup(frame, group):
    return frame[frame['elixir_grade_group']==group]

# Removes all mfg grades except one
def getGrade(frame, grade):
    return frame[frame['mfg_grade_bb_sk_x']==grade]

# Returns dictionary of frame
def getDict(frame):
    return frame.to_dict('records')
