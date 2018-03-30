# calcualtes summary stats of GP dataframe
import pandas as pd
import numpy as np

class frameStats:
    def __init__(self, frame):
        self.frame = frame
        self.rows = frame['order_bb_sk'].count()

    def lastOrder(self):
        return ((pd.to_datetime('today')-self.frame.created_date_sk.iloc[0])/np.timedelta64(1, 'D')).astype(int)

    def avgDeliveryDelay(self):
        return self.frame['GP_delivery_delay'].sum()/self.rows

    def avgDeliveryTime(self):
        return abs((((self.frame['created_date_sk']-self.frame['delivery_date_actual_sk'])/np.timedelta64(1, 'D')).astype(int)).sum()/self.rows)

    def orderedYTD(self):
        return self.frame['msf'].sum()

    def avgPerOrder(self):
        return self.orderedYTD()/self.rows

    def costYTD(self):
        return self.frame['gross_sales'].sum()

    def avgCostPerOrder(self):
        self.costYTD()/self.rows

    def quarterCost(self):
        # quarter totals
        q1mask = (self.frame['created_date_sk'] > '2017-1-1') & (self.frame['created_date_sk'] <= '2017-4-1')
        q2mask = (self.frame['created_date_sk'] >'2017-4-1') & (self.frame['created_date_sk'] <= '2017-7-1')
        q3mask = (self.frame['created_date_sk'] > '2017-7-1') & (self.frame['created_date_sk'] <= '2017-10-1')
        q4mask = (self.frame['created_date_sk'] > '2017-10-1') & (self.frame['created_date_sk'] <= '2018-1-1')

        q1 = self.frame.loc[q1mask]['gross_sales'].sum()
        q2 = self.frame.loc[q2mask]['gross_sales'].sum()
        q3 = self.frame.loc[q3mask]['gross_sales'].sum()
        q4 = self.frame.loc[q4mask]['gross_sales'].sum()

        return q1, q2, q3, q4


    def getStatDict(self):
        q1, q2, q3, q4 = self.quarterCost()

        return {'total_ordered':self.orderedYTD(), 'avg_per_order':self.avgPerOrder(),
    	'total_ordered_cost':self.costYTD(), 'avg_cost_per_order':self.avgCostPerOrder(),
    	'days_since_order':self.lastOrder(), 'avg_delivery_delay':self.avgDeliveryDelay(),
    	'avg_delivery_time':self.avgDeliveryTime(), 'q1':q1, 'q2':q2,'q3':q3,'q4':q4}
