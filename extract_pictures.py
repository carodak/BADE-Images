import numpy as np
import os
from os import listdir
from os.path import isfile, join
import pandas as pd
# importing shutil module  
import shutil

# ---- Script that moves unused images from the stimuli folder to the additional_pictures folder ---- #
# From a set of images contained in the stimuli folder, we will keep only those that are present in the csv file 
# containing the conditions of the experiment. 
# Unused images will be moved to the additional_pictures folder.

#File with the name of the images that will stay in the stimuli folder.
csvName= '/PicBADEconditions_Eng.csv'

#File with the name of the images that will stay in the stimuli folder.
csvName2= '/PicBADEconditions_practice_Eng.csv'

#String to the current path
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__)) 

#Path to stimuli folder
mypath = THIS_FOLDER+"/stimuli/" #string to the path of edf files

#Path where we gonna move the pictures that are not used
otherPic = THIS_FOLDER+"/additional_pictures/" #string to the path of edf files


#Get list of pictures, that will be used, from the conditions file
def GetListPictures(filePath):
    df = pd.read_csv(filePath).fillna(0)
    arr = np.array(df[['img_1','img_2','img_3']])
    arr = np.reshape(arr,(arr.shape[0]*arr.shape[1]))
    arr.sort()
    return arr
    #print("List of desired pictures: ", arr)

arr1 = GetListPictures(THIS_FOLDER+csvName)
arr2 = GetListPictures(THIS_FOLDER+csvName2)
arr = np.append(arr1,arr2)

#Get list of all pictures that are currently in the stimuli folder
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
onlyfiles.sort()
#print("List of all pictures",onlyfiles)

#Move pictures that are not in the conditions file
for i in range(len(onlyfiles)):
    myPic = mypath+onlyfiles[i] #string path to the file
    namePic = "stimuli/"+onlyfiles[i]
    if namePic not in arr:
        # Move the content of  
        # # source to destination  
        shutil.move(myPic, otherPic)

print("Done")