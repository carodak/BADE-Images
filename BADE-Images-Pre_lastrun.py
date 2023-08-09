#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on Tue Nov 22 17:54:47 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2022.2.4')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'BADE_builder'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/macbookpro/Documents/dossier_douglas/Katie/cognitive tasks/new/in progress/official/bade-images-pre/BADE-Images-Pre_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1680, 1050], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[1.000,1.000,1.000], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "lang" ---
# Run 'Begin Experiment' code from code_2
import re
import pandas as pd
import os, ssl
import json
import datetime

#Initialize starting date
startingDate = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")

#Initialize variables to change the color of highlighed rect
red = "red";

#Set french or english variable to true when the language is selected
french = False
english = False

trialConditions = ""
practiceConditions = ""
redcapVars = []

#Remove illegal characters in participants' name to avoid errors in filenames
expInfo['participant'] = re.sub('[^\w_.)( -]', '', expInfo['participant'])

#Load redcap variable
if not os.environ.get('PYTHONHTTPSVERIFY', '') and getattr(ssl, '_create_unverified_context', None):
    try:
        ssl._create_default_https_context = ssl._create_unverified_context
        sheet_url = "https://docs.google.com/spreadsheets/d/1HKhUnueu7nKidtb37oh2HPwGXNgj5b4i6DsxrUrUOCM/edit#gid=489716065"
        url_1 = sheet_url.replace('/edit#gid=', '/export?format=csv&gid=')
        dfRed = pd.read_csv(url_1)
        nbCol = 19 #Change it if we change the google sheet
        for i in range(1, nbCol):
            redcapVars.append(dfRed.iloc[0,i])
    except:
        print("An exception occurred. The redcap variables could not be found.")
rect1 = visual.ImageStim(
    win=win,
    name='rect1', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, 0.02), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
rect2 = visual.ImageStim(
    win=win,
    name='rect2', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.07), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
txt_instr = visual.TextStim(win=win, name='txt_instr',
    text='Veuillez sélectionner votre langue.\n\nPlease select your language.',
    font='Arial',
    pos=(0, 0.18), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
txt_rect1 = visual.TextStim(win=win, name='txt_rect1',
    text='FRANÇAIS',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=0.73, 
    languageStyle='LTR',
    depth=-4.0);
txt_rect2 = visual.TextStim(win=win, name='txt_rect2',
    text='ENGLISH',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=0.73, 
    languageStyle='LTR',
    depth=-5.0);
mouse1 = event.Mouse(win=win)
x, y = [None, None]
mouse1.mouseClock = core.Clock()

# --- Initialize components for Routine "instr" ---
img1_i = visual.ImageStim(
    win=win,
    name='img1_i', 
    image='ballet slippers_img1.png', mask=None, anchor='center',
    ori=0, pos=(0, 0.25), size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
text1_i = visual.TextStim(win=win, name='text1_i',
    text='BALLET SLIPPERS',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
slider_i = visual.Slider(win=win, name='slider_i',
    startValue=None, size=(0.05, 0.35), pos=(0.3,0.25), units=None,
    labels=None, ticks=(-100, 0, 100), granularity=0,
    style=['rating'], styleTweaks=(), opacity=1,
    labelColor='black', markerColor='black', lineColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, ori=0, depth=-3, readOnly=False)
instr_text1 = visual.TextStim(win=win, name='instr_text1',
    text='In this task, you will be asked to identify pictures. You will be shown a picture gradually with a word listed below it, just like in the example above. Your job is to rate whether you think the word accurately describes what the full picture will be.\n\nPractice using your mouse to select your rating by clicking or dragging the slider up and down the scale. You can make your rating at any point along the scale, depending on how confident you are in your response.\n\nWhen you are comfortable, click on “next” to move on.',
    font='Arial',
    pos=(0, -0.23), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
label1_i = visual.TextStim(win=win, name='label1_i',
    text='100% YES',
    font='Arial',
    pos=(0.3, 0.462), height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
label2_i = visual.TextStim(win=win, name='label2_i',
    text='100% NO',
    font='Arial',
    pos=(0.3, 0.038), height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
next_i = visual.ImageStim(
    win=win,
    name='next_i', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.469), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-7.0)
txt_next_i = visual.TextStim(win=win, name='txt_next_i',
    text='NEXT',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=0.73, 
    languageStyle='LTR',
    depth=-8.0);
mouse_i = event.Mouse(win=win)
x, y = [None, None]
mouse_i.mouseClock = core.Clock()

# --- Initialize components for Routine "instr2" ---
img1_i2 = visual.ImageStim(
    win=win,
    name='img1_i2', 
    image='ballet slippers_img1.png', mask=None, anchor='center',
    ori=0, pos=(0, 0.25), size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
img2_i2 = visual.ImageStim(
    win=win,
    name='img2_i2', 
    image='ballet slippers_img2.png', mask=None, anchor='center',
    ori=0, pos=(0, 0.25), size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
text1_i2 = visual.TextStim(win=win, name='text1_i2',
    text='BALLET SLIPPERS',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
slider_i2 = visual.Slider(win=win, name='slider_i2',
    startValue=None, size=(0.05, 0.35), pos=(0.3,0.25), units=None,
    labels=None, ticks=(-100, 0, 100), granularity=0,
    style=['rating'], styleTweaks=(), opacity=1,
    labelColor='black', markerColor='black', lineColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, ori=0, depth=-4, readOnly=False)
instr_text2 = visual.TextStim(win=win, name='instr_text2',
    text='Once you respond, more of the picture will begin to appear. Reconsider the rating you made. You may change your rating as much or as little as you like. Once you make your second response, you will see the full picture and the correct word.\n\nYou will now complete several practice trials before beginning the experiment. Try to respond as quickly as you can.\n\nWhen you are comfortable, click on “next” to move on.',
    font='Arial',
    pos=(0, -0.23), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
label1_i2 = visual.TextStim(win=win, name='label1_i2',
    text='100% YES',
    font='Arial',
    pos=(0.3, 0.462), height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
label2_i2 = visual.TextStim(win=win, name='label2_i2',
    text='100% NO',
    font='Arial',
    pos=(0.3, 0.038), height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
next_i2 = visual.ImageStim(
    win=win,
    name='next_i2', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.455), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-8.0)
txt_next_i2 = visual.TextStim(win=win, name='txt_next_i2',
    text='NEXT',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=0.73, 
    languageStyle='LTR',
    depth=-9.0);
mouse_i2 = event.Mouse(win=win)
x, y = [None, None]
mouse_i2.mouseClock = core.Clock()

# --- Initialize components for Routine "practice" ---
text_1pr = visual.TextStim(win=win, name='text_1pr',
    text='',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
text_2pr = visual.TextStim(win=win, name='text_2pr',
    text='',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
text_3pr = visual.TextStim(win=win, name='text_3pr',
    text='',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
image_1pr = visual.ImageStim(
    win=win,
    name='image_1pr', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-4.0)
image_2pr = visual.ImageStim(
    win=win,
    name='image_2pr', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-5.0)
image_3pr = visual.ImageStim(
    win=win,
    name='image_3pr', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-6.0)
slider_pr = visual.Slider(win=win, name='slider_pr',
    startValue=None, size=(0.05, 0.45), pos=(0.5,0), units=None,
    labels=None, ticks=(-100, 0, 100), granularity=0,
    style=['rating'], styleTweaks=(), opacity=1,
    labelColor='black', markerColor='black', lineColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, ori=0, depth=-7, readOnly=False)
slider_pr2 = visual.Slider(win=win, name='slider_pr2',
    startValue=None, size=(0.05, 0.45), pos=(0.5,0), units=None,
    labels=None, ticks=(-100, 0, 100), granularity=0,
    style=['rating'], styleTweaks=(), opacity=1,
    labelColor='black', markerColor='black', lineColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, ori=0, depth=-8, readOnly=False)
label1_pr = visual.TextStim(win=win, name='label1_pr',
    text='100% YES',
    font='Arial',
    pos=(0.5, 0.266), height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
label2_pr = visual.TextStim(win=win, name='label2_pr',
    text='100% NO',
    font='Arial',
    pos=(0.5, -0.266), height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
rating_val_pr = visual.TextStim(win=win, name='rating_val_pr',
    text=None,
    font='Arial',
    pos=[0,0], height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
mouse_pr = event.Mouse(win=win)
x, y = [None, None]
mouse_pr.mouseClock = core.Clock()

# --- Initialize components for Routine "ready" ---
ready_2 = visual.TextStim(win=win, name='ready_2',
    text='Ready to begin?',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
next_3 = visual.ImageStim(
    win=win,
    name='next_3', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.12), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
txt_next_3 = visual.TextStim(win=win, name='txt_next_3',
    text='BEGIN',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=0.73, 
    languageStyle='LTR',
    depth=-3.0);
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()

# --- Initialize components for Routine "trial" ---
# Run 'Begin Experiment' code from code
nbRating = float("inf")
currentTrial = 1
text_1 = visual.TextStim(win=win, name='text_1',
    text='',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
text_2 = visual.TextStim(win=win, name='text_2',
    text='',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
text_3 = visual.TextStim(win=win, name='text_3',
    text='',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
image_1 = visual.ImageStim(
    win=win,
    name='image_1', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-4.0)
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-5.0)
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-6.0)
slider = visual.Slider(win=win, name='slider',
    startValue=None, size=(0.05, 0.45), pos=(0.5,0), units=None,
    labels=None, ticks=(-100, 0, 100), granularity=0,
    style=['rating'], styleTweaks=(), opacity=1.0,
    labelColor='black', markerColor='black', lineColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, ori=0, depth=-7, readOnly=False)
slider2 = visual.Slider(win=win, name='slider2',
    startValue=None, size=(0.05, 0.45), pos=(0.5,0), units=None,
    labels=None, ticks=(-100, 0, 100), granularity=0,
    style=['rating'], styleTweaks=(), opacity=1.0,
    labelColor='black', markerColor='black', lineColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, ori=0, depth=-8, readOnly=False)
label1 = visual.TextStim(win=win, name='label1',
    text='100% YES',
    font='Arial',
    pos=(0.5, 0.266), height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
label2 = visual.TextStim(win=win, name='label2',
    text='100% NO',
    font='Arial',
    pos=(0.5, -0.266), height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
rating_val = visual.TextStim(win=win, name='rating_val',
    text=None,
    font='Arial',
    pos=[0,0], height=0.035, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# --- Initialize components for Routine "thanks" ---
thx = visual.TextStim(win=win, name='thx',
    text='Thank you for your participation!',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "lang" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
txt_rect1.setPos([rect1.pos])
txt_rect2.setPos([rect2.pos])
# setup some python lists for storing info about the mouse1
mouse1.clicked_name = []
gotValidClick = False  # until a click is received
mouse1.mouseClock.reset()
# keep track of which components have finished
langComponents = [rect1, rect2, txt_instr, txt_rect1, txt_rect2, mouse1]
for thisComponent in langComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "lang" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from code_2
    #Change the color of highlighed rect
    if rect1.contains(mouse1):
        rect1.setOpacity(0.99)
        txt_rect1.setOpacity(2)
    else:
        rect1.setOpacity(0.73)
        txt_rect1.setOpacity(0.73)
        
    if rect2.contains(mouse1):
        rect2.setOpacity(0.99)
        txt_rect2.setOpacity(2)
    else:
        rect2.setOpacity(0.73)
        txt_rect2.setOpacity(0.73)
        
    #Function that is going to set the chosen language
    if rect1.contains(mouse1) and mouse1.getPressed()[0] == True:
            french = True
            practiceConditions = "BADEImgConditions_practice_Fr.csv"
            trialConditions = "BADEImgConditions_Fr.csv"
    
    elif rect2.contains(mouse1) and mouse1.getPressed()[0] == True:
            english = True
            practiceConditions = "BADEImgConditions_practice_Eng.csv"
            trialConditions = "BADEImgConditions_Eng.csv"
    
    # *rect1* updates
    if rect1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        rect1.frameNStart = frameN  # exact frame index
        rect1.tStart = t  # local t and not account for scr refresh
        rect1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(rect1, 'tStartRefresh')  # time at next scr refresh
        rect1.setAutoDraw(True)
    
    # *rect2* updates
    if rect2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        rect2.frameNStart = frameN  # exact frame index
        rect2.tStart = t  # local t and not account for scr refresh
        rect2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(rect2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'rect2.started')
        rect2.setAutoDraw(True)
    
    # *txt_instr* updates
    if txt_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_instr.frameNStart = frameN  # exact frame index
        txt_instr.tStart = t  # local t and not account for scr refresh
        txt_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_instr, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_instr.started')
        txt_instr.setAutoDraw(True)
    
    # *txt_rect1* updates
    if txt_rect1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_rect1.frameNStart = frameN  # exact frame index
        txt_rect1.tStart = t  # local t and not account for scr refresh
        txt_rect1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_rect1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_rect1.started')
        txt_rect1.setAutoDraw(True)
    
    # *txt_rect2* updates
    if txt_rect2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_rect2.frameNStart = frameN  # exact frame index
        txt_rect2.tStart = t  # local t and not account for scr refresh
        txt_rect2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_rect2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_rect2.started')
        txt_rect2.setAutoDraw(True)
    # *mouse1* updates
    if mouse1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse1.frameNStart = frameN  # exact frame index
        mouse1.tStart = t  # local t and not account for scr refresh
        mouse1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse1.started', t)
        mouse1.status = STARTED
        prevButtonState = mouse1.getPressed()  # if button is down already this ISN'T a new click
    if mouse1.status == STARTED:  # only update if started and not finished!
        buttons = mouse1.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter([rect1, rect2])
                    clickableList = [rect1, rect2]
                except:
                    clickableList = [[rect1, rect2]]
                for obj in clickableList:
                    if obj.contains(mouse1):
                        gotValidClick = True
                        mouse1.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in langComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "lang" ---
for thisComponent in langComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from code_2
if english==True:
    thisExp.addData("Language", "en")
else:
    thisExp.addData("Language", "fr")
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "lang" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_JS
img1start = False
img1_i.opacity = 0

slider_is_initialized = False

#Adapt the color and size of the marker to the slider
col = 'black'

#Change the text according to the selected language, function SetTxtInstr()
if english:
    text1_i.text = "BALLET SLIPPERS"
    instr_text1.text = "\nIn this task, you will be asked to identify pictures. You will be shown a picture gradually with a word listed below it, just like in the example above. Your job is to rate whether you think the word accurately describes what the full picture will be.\n \n Practice using your mouse or touchpad to select your rating by clicking or dragging the slider up and down the scale. You can make your rating at any point along the scale, depending on how confident you are in your response.\n \n When you are comfortable, click on \"NEXT\" to move on."
    label1_i.text = "100% YES"
    label2_i.text = "100% NO"
    txt_next_i.text = "NEXT"
else:
    text1_i.text = "CHAUSSONS DE BALLET"
    instr_text1.text = "Dans cette tâche, vous devrez identifier des images. Vous allez voir graduellement une image, avec un mot écrit en-dessous. Évaluez si vous croyez que le mot décrit de manière adéquate l’image entière.\n \n Vous allez utiliser la souris ou le pavé tactile pour évaluer. Cliquez sur le bouton gauche sur l'échelle ou appuyez et maintenez le bouton pour déplacer le curseur vers oui ou non. Vous pouvez faire vos évaluations à n’importe quel endroit sur l’échelle, dépendamment à quel point vous êtes confiant de votre réponse.\n \n Quand vous serez prêt, cliquez sur \"SUIVANT\" pour commencer."
    label1_i.text = "100% OUI"
    label2_i.text = "100% NON"
    txt_next_i.text = "SUIVANT"
slider_i.reset()
txt_next_i.setPos([next_i.pos])
# setup some python lists for storing info about the mouse_i
mouse_i.x = []
mouse_i.y = []
mouse_i.leftButton = []
mouse_i.midButton = []
mouse_i.rightButton = []
mouse_i.time = []
mouse_i.clicked_name = []
gotValidClick = False  # until a click is received
mouse_i.mouseClock.reset()
# keep track of which components have finished
instrComponents = [img1_i, text1_i, slider_i, instr_text1, label1_i, label2_i, next_i, txt_next_i, mouse_i]
for thisComponent in instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from code_JS
    keys = event.getKeys()
    
    #Change the color of highlighed rect
    if next_i.contains(mouse_i):
        next_i.opacity = 0.99
        txt_next_i.opacity = 2
    else:
        next_i.opacity = 0.73
        txt_next_i.opacity = 0.73
    
    # Initialize slider1 marker at 0 position
    if slider_is_initialized == False and img1_i.status == STARTED:
        try:
            slider_i.marker.setColor(col, colorSpace='rgb')
            slider_i.marker.size = (0.05, 0.05)
            slider_i.markerPos = 0
            slider_i._onChange(True)()
        except:
            print("An exception while initializing slider occurred")
        slider_i.opacity = 1
        slider_is_initialized  = True
    
    # Moving slider using arrowKeys
    if slider_is_initialized and 'up' in keys:
        slider_i.markerPos += 10
        slider_i.recordRating(slider_i.markerPos)
    elif slider_is_initialized and 'down' in keys:
        slider_i.markerPos -= 10
        slider_i.recordRating(slider_i.markerPos)
    
    if t>=0.02 and img1_i.status == NOT_STARTED:
        img1start = True
    
    # *img1_i* updates
    if img1_i.status == NOT_STARTED and img1start == 1:
        # keep track of start time/frame for later
        img1_i.frameNStart = frameN  # exact frame index
        img1_i.tStart = t  # local t and not account for scr refresh
        img1_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(img1_i, 'tStartRefresh')  # time at next scr refresh
        img1_i.setAutoDraw(True)
    if img1_i.status == STARTED:  # only update if drawing
        img1_i.setOpacity((frameN)/300, log=False)
    
    # *text1_i* updates
    if text1_i.status == NOT_STARTED and frameN >= 0.0:
        # keep track of start time/frame for later
        text1_i.frameNStart = frameN  # exact frame index
        text1_i.tStart = t  # local t and not account for scr refresh
        text1_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text1_i, 'tStartRefresh')  # time at next scr refresh
        text1_i.setAutoDraw(True)
    
    # *slider_i* updates
    if slider_i.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_i.frameNStart = frameN  # exact frame index
        slider_i.tStart = t  # local t and not account for scr refresh
        slider_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_i, 'tStartRefresh')  # time at next scr refresh
        slider_i.setAutoDraw(True)
    
    # *instr_text1* updates
    if instr_text1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text1.frameNStart = frameN  # exact frame index
        instr_text1.tStart = t  # local t and not account for scr refresh
        instr_text1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text1, 'tStartRefresh')  # time at next scr refresh
        instr_text1.setAutoDraw(True)
    
    # *label1_i* updates
    if label1_i.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        label1_i.frameNStart = frameN  # exact frame index
        label1_i.tStart = t  # local t and not account for scr refresh
        label1_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(label1_i, 'tStartRefresh')  # time at next scr refresh
        label1_i.setAutoDraw(True)
    
    # *label2_i* updates
    if label2_i.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        label2_i.frameNStart = frameN  # exact frame index
        label2_i.tStart = t  # local t and not account for scr refresh
        label2_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(label2_i, 'tStartRefresh')  # time at next scr refresh
        label2_i.setAutoDraw(True)
    
    # *next_i* updates
    if next_i.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_i.frameNStart = frameN  # exact frame index
        next_i.tStart = t  # local t and not account for scr refresh
        next_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_i, 'tStartRefresh')  # time at next scr refresh
        next_i.setAutoDraw(True)
    
    # *txt_next_i* updates
    if txt_next_i.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_next_i.frameNStart = frameN  # exact frame index
        txt_next_i.tStart = t  # local t and not account for scr refresh
        txt_next_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_next_i, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_next_i.started')
        txt_next_i.setAutoDraw(True)
    # *mouse_i* updates
    if mouse_i.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_i.frameNStart = frameN  # exact frame index
        mouse_i.tStart = t  # local t and not account for scr refresh
        mouse_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_i, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_i.started', t)
        mouse_i.status = STARTED
        prevButtonState = mouse_i.getPressed()  # if button is down already this ISN'T a new click
    if mouse_i.status == STARTED:  # only update if started and not finished!
        buttons = mouse_i.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(next_i)
                    clickableList = next_i
                except:
                    clickableList = [next_i]
                for obj in clickableList:
                    if obj.contains(mouse_i):
                        gotValidClick = True
                        mouse_i.clicked_name.append(obj.name)
                x, y = mouse_i.getPos()
                mouse_i.x.append(x)
                mouse_i.y.append(y)
                buttons = mouse_i.getPressed()
                mouse_i.leftButton.append(buttons[0])
                mouse_i.midButton.append(buttons[1])
                mouse_i.rightButton.append(buttons[2])
                mouse_i.time.append(mouse_i.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instr" ---
for thisComponent in instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_i.x', mouse_i.x)
thisExp.addData('mouse_i.y', mouse_i.y)
thisExp.addData('mouse_i.leftButton', mouse_i.leftButton)
thisExp.addData('mouse_i.midButton', mouse_i.midButton)
thisExp.addData('mouse_i.rightButton', mouse_i.rightButton)
thisExp.addData('mouse_i.time', mouse_i.time)
thisExp.addData('mouse_i.clicked_name', mouse_i.clicked_name)
thisExp.nextEntry()
# the Routine "instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instr2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_i2
img2start = False
frameNstart = 0
img2_i2.setOpacity(0)
slider_is_initialized = False

#Adapt the color and size of the marker to the slider
col = 'black'

#Change the text according to the selected language, function SetTxtInstr()
if english:
    text1_i2.text = "BALLET SLIPPERS"
    instr_text2.text = "Once you respond, more of the picture will begin to appear. Reconsider the rating you made. If you wish to keep your previous rating, you must click again in the same place on the scale. You may change your rating as much or as little as you like. Once you make your second response, you will see the full picture and the correct word.\n \n You will now complete several practice trials before beginning the experiment. Try to respond as quickly as you can.\n \n When you are comfortable, click on \"PRACTICE\" to move on."
    label1_i2.text = "100% YES"
    label2_i2.text = "100% NO"
    txt_next_i2.text = "PRACTICE"
else:
    text1_i2.text = "CHAUSSONS DE BALLET"
    instr_text2.text = "Une fois que vous avez répondu, plus de détails de l’image commenceront à apparaître. Reconsidérez l’évaluation que vous avez faite. Si vous souhaitez conserver votre évaluation précédente, vous devez cliquer de nouveau au même endroit sur l’échelle. Vous pouvez changer votre évaluation autant que vous le voulez. Une fois votre deuxième évaluation faite, vous verrez l’image entière et le mot correct.\n \n Vous allez maintenant compléter plusieurs essais de pratique, avant de commencer l’exercice. Essayez de répondre le plus vite que vous pouvez.\n \n Quand vous serez prêt, cliquez sur \"S’ENTRAÎNER\" pour commencer."
    label1_i2.text = "100% OUI"
    label2_i2.text = "100% NON"
    txt_next_i2.text = "S’ENTRAÎNER"
slider_i2.reset()
# setup some python lists for storing info about the mouse_i2
mouse_i2.x = []
mouse_i2.y = []
mouse_i2.leftButton = []
mouse_i2.midButton = []
mouse_i2.rightButton = []
mouse_i2.time = []
mouse_i2.clicked_name = []
gotValidClick = False  # until a click is received
mouse_i2.mouseClock.reset()
# keep track of which components have finished
instr2Components = [img1_i2, img2_i2, text1_i2, slider_i2, instr_text2, label1_i2, label2_i2, next_i2, txt_next_i2, mouse_i2]
for thisComponent in instr2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instr2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from code_i2
    keys = event.getKeys()
    
    #Change the color of highlighed rect
    if next_i2.contains(mouse_i2):
        next_i2.opacity=0.99
        txt_next_i2.opacity=2
    else:
        next_i2.opacity=0.73
        txt_next_i2.opacity=0.73
    
    # Initialize slider1 marker at 0 position
    if slider_is_initialized == False and img1_i2.status == STARTED:
        try:
            slider_i2.marker.setColor(col, colorSpace='rgb')
            slider_i2.marker.size = (0.05, 0.05)
            slider_i2.markerPos = slider_i.markerPos
            slider_i2._onChange(True)()
        except:
            print("An exception while initializing slider occurred")
        slider_i2.opacity=1
        slider_is_initialized  = True
    
    # Move using arrow keys
    if slider_is_initialized and 'up' in keys:
        slider_i2.markerPos += 10
        slider_i2.recordRating(slider_i2.markerPos)
    elif slider_is_initialized and 'down' in keys:
        slider_i2.markerPos -= 10
        slider_i2.recordRating(slider_i2.markerPos)
    
    if t>=0.02 and img2_i2.status == NOT_STARTED:
        img2start = True
    
    # *img1_i2* updates
    if img1_i2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        img1_i2.frameNStart = frameN  # exact frame index
        img1_i2.tStart = t  # local t and not account for scr refresh
        img1_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(img1_i2, 'tStartRefresh')  # time at next scr refresh
        img1_i2.setAutoDraw(True)
    
    # *img2_i2* updates
    if img2_i2.status == NOT_STARTED and img2start == 1:
        # keep track of start time/frame for later
        img2_i2.frameNStart = frameN  # exact frame index
        img2_i2.tStart = t  # local t and not account for scr refresh
        img2_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(img2_i2, 'tStartRefresh')  # time at next scr refresh
        img2_i2.setAutoDraw(True)
    if img2_i2.status == STARTED:  # only update if drawing
        img2_i2.setOpacity((frameN)/600, log=False)
    
    # *text1_i2* updates
    if text1_i2.status == NOT_STARTED and frameN >= 0.0:
        # keep track of start time/frame for later
        text1_i2.frameNStart = frameN  # exact frame index
        text1_i2.tStart = t  # local t and not account for scr refresh
        text1_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text1_i2, 'tStartRefresh')  # time at next scr refresh
        text1_i2.setAutoDraw(True)
    
    # *slider_i2* updates
    if slider_i2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        slider_i2.frameNStart = frameN  # exact frame index
        slider_i2.tStart = t  # local t and not account for scr refresh
        slider_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_i2, 'tStartRefresh')  # time at next scr refresh
        slider_i2.setAutoDraw(True)
    
    # *instr_text2* updates
    if instr_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text2.frameNStart = frameN  # exact frame index
        instr_text2.tStart = t  # local t and not account for scr refresh
        instr_text2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text2, 'tStartRefresh')  # time at next scr refresh
        instr_text2.setAutoDraw(True)
    
    # *label1_i2* updates
    if label1_i2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        label1_i2.frameNStart = frameN  # exact frame index
        label1_i2.tStart = t  # local t and not account for scr refresh
        label1_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(label1_i2, 'tStartRefresh')  # time at next scr refresh
        label1_i2.setAutoDraw(True)
    
    # *label2_i2* updates
    if label2_i2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        label2_i2.frameNStart = frameN  # exact frame index
        label2_i2.tStart = t  # local t and not account for scr refresh
        label2_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(label2_i2, 'tStartRefresh')  # time at next scr refresh
        label2_i2.setAutoDraw(True)
    
    # *next_i2* updates
    if next_i2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_i2.frameNStart = frameN  # exact frame index
        next_i2.tStart = t  # local t and not account for scr refresh
        next_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_i2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'next_i2.started')
        next_i2.setAutoDraw(True)
    
    # *txt_next_i2* updates
    if txt_next_i2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_next_i2.frameNStart = frameN  # exact frame index
        txt_next_i2.tStart = t  # local t and not account for scr refresh
        txt_next_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_next_i2, 'tStartRefresh')  # time at next scr refresh
        txt_next_i2.setAutoDraw(True)
    if txt_next_i2.status == STARTED:  # only update if drawing
        txt_next_i2.setPos([next_i2.pos], log=False)
    # *mouse_i2* updates
    if mouse_i2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_i2.frameNStart = frameN  # exact frame index
        mouse_i2.tStart = t  # local t and not account for scr refresh
        mouse_i2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_i2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_i2.started', t)
        mouse_i2.status = STARTED
        prevButtonState = mouse_i2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_i2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_i2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(next_i2)
                    clickableList = next_i2
                except:
                    clickableList = [next_i2]
                for obj in clickableList:
                    if obj.contains(mouse_i2):
                        gotValidClick = True
                        mouse_i2.clicked_name.append(obj.name)
                x, y = mouse_i2.getPos()
                mouse_i2.x.append(x)
                mouse_i2.y.append(y)
                buttons = mouse_i2.getPressed()
                mouse_i2.leftButton.append(buttons[0])
                mouse_i2.midButton.append(buttons[1])
                mouse_i2.rightButton.append(buttons[2])
                mouse_i2.time.append(mouse_i2.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instr2" ---
for thisComponent in instr2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from code_i2
img1_i2.setOpacity(0)

# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_i2.x', mouse_i2.x)
thisExp.addData('mouse_i2.y', mouse_i2.y)
thisExp.addData('mouse_i2.leftButton', mouse_i2.leftButton)
thisExp.addData('mouse_i2.midButton', mouse_i2.midButton)
thisExp.addData('mouse_i2.rightButton', mouse_i2.rightButton)
thisExp.addData('mouse_i2.time', mouse_i2.time)
thisExp.addData('mouse_i2.clicked_name', mouse_i2.clicked_name)
thisExp.nextEntry()
# the Routine "instr2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practices = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(practiceConditions),
    seed=None, name='practices')
thisExp.addLoop(practices)  # add the loop to the experiment
thisPractice = practices.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
if thisPractice != None:
    for paramName in thisPractice:
        exec('{} = thisPractice[paramName]'.format(paramName))

for thisPractice in practices:
    currentLoop = practices
    # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
    if thisPractice != None:
        for paramName in thisPractice:
            exec('{} = thisPractice[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "practice" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_pr
    img2start = False
    img3start = False
    img1stop = False
    image_1pr.opacity = 0
    image_2pr.opacity = 0
    startingPos1 = True
    startingPos2 = True
    
    #Adapt the color and size of the marker to the slider
    col = 'black'
    
    #Show rating
    preview_pos = (0.613, 0)
    rating_val_pr.setPos(preview_pos)
    rating_val_pr.alignHoriz='right'
    # the position of the rating value differs using Python (probably because of the alignHoriz function), so we are fixing it
    
    #Sliders
    slider1_is_initialized = False
    slider2_is_initialized = False
    
    slider_pr.lastrating = ""
    
    #Show scores
    txtScoreY = ""
    txtScoreN = ""
    
    #opacity timers
    timer1 = core.Clock()
    timer2 = core.Clock()
    opacity1 = 0
    opacity2 = 0
    
    #Change the text according to the selected language, function SetTxtInstr()
    if english:
        label1_pr.text = "100% YES"
        label2_pr.text = "100% NO"
        txtScoreY = "% YES"
        txtScoreN = "% NO"
    else:
        label1_pr.text = "100% OUI"
        label2_pr.text = "100% NON"
        txtScoreY = "% OUI"
        txtScoreN = "% NON"
    text_1pr.setText(txt_1)
    text_2pr.setText(txt_2)
    text_3pr.setText(txt_3)
    image_1pr.setImage(img_1)
    image_2pr.setImage(img_2)
    image_3pr.setImage(img_3)
    slider_pr.reset()
    slider_pr2.reset()
    rating_val_pr.setPos(preview_pos)
    rating_val_pr.setText('')
    # setup some python lists for storing info about the mouse_pr
    mouse_pr.x = []
    mouse_pr.y = []
    mouse_pr.leftButton = []
    mouse_pr.midButton = []
    mouse_pr.rightButton = []
    mouse_pr.time = []
    mouse_pr.clicked_name = []
    gotValidClick = False  # until a click is received
    mouse_pr.mouseClock.reset()
    # keep track of which components have finished
    practiceComponents = [text_1pr, text_2pr, text_3pr, image_1pr, image_2pr, image_3pr, slider_pr, slider_pr2, label1_pr, label2_pr, rating_val_pr, mouse_pr]
    for thisComponent in practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "practice" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from code_pr
        # Initialize slider1 marker at 0 position
        if slider1_is_initialized == False and image_1pr.status == STARTED:
            try:
                slider_pr.marker.setColor(col, colorSpace='rgb')
                slider_pr.marker.size = (0.05, 0.05)
                slider_pr.markerPos = 0
                slider1_is_initialized = True
                slider_pr._onChange(True)()
                slider_pr._setupSlider()
                timer1.add(5)
            except:
                print("An exception while initializing slider 1 occurred")
        # Initialize slider2 marker at slider1marker position
        if slider2_is_initialized == False and image_2pr.status == STARTED:
            slider_pr2.markerPos = slider_pr.markerPos
            try:
                slider_pr2.marker.setColor(col, colorSpace='rgb')
                slider_pr2.marker.size = (0.05, 0.05)
                slider2_is_initialized = True
                slider_pr2._onChange(True)()
                slider_pr2._setupSlider()
                slider_pr2.draw()
                slider_pr2.setAutoDraw(True)
            except:
                print("An exception while initializing slider 2 occurred")
        
        
        # Compute opacities
        if opacity1<1 and not img2start:
            opacity1 = (timer1.getTime())/5
        elif opacity2<1 and img2start:
            opacity2 = (timer2.getTime())/5
        
        # Detect if we moved the marker
        if not img2start and slider_pr.marker.contains(mouse_pr) and mouse_pr.getPressed()[0] == True:
            startingPos1 = False
        
        # Get keys
        keys = event.getKeys()
        
        # Moving slider using arrowKeys
        if not img2start and 'up' in keys:
            slider_pr.markerPos += 10
            slider_pr.recordRating(slider_pr.markerPos)
            startingPos1 = False
        elif not img2start and 'down' in keys:
            slider_pr.markerPos -= 10
            slider_pr.recordRating(slider_pr.markerPos)
            startingPos1 = False
        
        #print rating next to slider before releasing the mouse
        if not img2start and not startingPos1:
            #display rating value
            val = round(slider_pr.markerPos)
            if val>=0:
                rating_val_pr.text = str(int(abs(val)))+txtScoreY
            else:
                rating_val_pr.text = str(int(abs(val)))+txtScoreN
                
        # Detect if we moved the marker
        if img2start and slider_pr2.marker.contains(mouse_pr) and mouse_pr.getPressed()[0] == True:
            startingPos2 = False
            img1stop = True
        
        # Moving slider using arrowKeys
        if img2start and 'up' in keys:
            slider_pr2.markerPos += 10
            slider_pr2.recordRating(slider_pr2.markerPos)
            startingPos2 = False
            img1stop = True
        elif img2start and 'down' in keys:
            slider_pr2.markerPos -= 10
            slider_pr2.recordRating(slider_pr2.markerPos)
            startingPos2 = False
            img1stop = True
            
        #print rating next to slider before releasing the mouse
        if img2start and not startingPos2:
            #display rating value
            val = round(slider_pr2.markerPos)
            if val>=0:
                rating_val_pr.text = str(int(abs(val)))+txtScoreY
            else:
                rating_val_pr.text = str(int(abs(val)))+txtScoreN
        
        #Start img2 and img3
        if index > 0:
            if t >= 5.0 and image_2pr.status == NOT_STARTED and image_1pr.opacity >= 1:
                img2start = True
                slider_pr2.reset()
                rating_val_pr.text = ""
                slider_pr.lastrating = slider_pr.markerPos
                timer2.reset()
            elif t >= 10.0 and image_3pr.status == NOT_STARTED and image_2pr.opacity >= 1:
                img3start = True
                img1stop = True
        elif slider_pr.getRating()!=None and image_2pr.status == NOT_STARTED and image_1pr.opacity >= 1:
            img2start = True
            slider_pr2.reset()
            slider_pr.lastrating = slider_pr.markerPos
            timer2.reset()
            rating_val_pr.text = ""
        elif slider_pr2.getRating()!=None and image_3pr.status == NOT_STARTED and image_2pr.opacity >= 1:
            img3start = True
            img1stop = True
        
        # *text_1pr* updates
        if text_1pr.status == NOT_STARTED and frameN >= 0.0:
            # keep track of start time/frame for later
            text_1pr.frameNStart = frameN  # exact frame index
            text_1pr.tStart = t  # local t and not account for scr refresh
            text_1pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_1pr, 'tStartRefresh')  # time at next scr refresh
            text_1pr.setAutoDraw(True)
        if text_1pr.status == STARTED:
            if bool(img2start == 1):
                # keep track of stop time/frame for later
                text_1pr.tStop = t  # not accounting for scr refresh
                text_1pr.frameNStop = frameN  # exact frame index
                text_1pr.setAutoDraw(False)
        
        # *text_2pr* updates
        if text_2pr.status == NOT_STARTED and img2start == 1:
            # keep track of start time/frame for later
            text_2pr.frameNStart = frameN  # exact frame index
            text_2pr.tStart = t  # local t and not account for scr refresh
            text_2pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2pr, 'tStartRefresh')  # time at next scr refresh
            text_2pr.setAutoDraw(True)
        if text_2pr.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                text_2pr.tStop = t  # not accounting for scr refresh
                text_2pr.frameNStop = frameN  # exact frame index
                text_2pr.setAutoDraw(False)
        
        # *text_3pr* updates
        if text_3pr.status == NOT_STARTED and img3start == 1:
            # keep track of start time/frame for later
            text_3pr.frameNStart = frameN  # exact frame index
            text_3pr.tStart = t  # local t and not account for scr refresh
            text_3pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_3pr.started')
            text_3pr.setAutoDraw(True)
        if text_3pr.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3pr.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                text_3pr.tStop = t  # not accounting for scr refresh
                text_3pr.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_3pr.stopped')
                text_3pr.setAutoDraw(False)
        
        # *image_1pr* updates
        if image_1pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_1pr.frameNStart = frameN  # exact frame index
            image_1pr.tStart = t  # local t and not account for scr refresh
            image_1pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_1pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_1pr.started')
            image_1pr.setAutoDraw(True)
        if image_1pr.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                image_1pr.tStop = t  # not accounting for scr refresh
                image_1pr.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_1pr.stopped')
                image_1pr.setAutoDraw(False)
        if image_1pr.status == STARTED:  # only update if drawing
            image_1pr.setOpacity(opacity1, log=False)
        
        # *image_2pr* updates
        if image_2pr.status == NOT_STARTED and img2start == 1:
            # keep track of start time/frame for later
            image_2pr.frameNStart = frameN  # exact frame index
            image_2pr.tStart = t  # local t and not account for scr refresh
            image_2pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_2pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_2pr.started')
            image_2pr.setAutoDraw(True)
        if image_2pr.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                image_2pr.tStop = t  # not accounting for scr refresh
                image_2pr.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_2pr.stopped')
                image_2pr.setAutoDraw(False)
        if image_2pr.status == STARTED:  # only update if drawing
            image_2pr.setOpacity(opacity2, log=False)
        
        # *image_3pr* updates
        if image_3pr.status == NOT_STARTED and img3start == 1:
            # keep track of start time/frame for later
            image_3pr.frameNStart = frameN  # exact frame index
            image_3pr.tStart = t  # local t and not account for scr refresh
            image_3pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_3pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_3pr.started')
            image_3pr.setAutoDraw(True)
        if image_3pr.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_3pr.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                image_3pr.tStop = t  # not accounting for scr refresh
                image_3pr.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_3pr.stopped')
                image_3pr.setAutoDraw(False)
        
        # *slider_pr* updates
        if slider_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_pr.frameNStart = frameN  # exact frame index
            slider_pr.tStart = t  # local t and not account for scr refresh
            slider_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider_pr.started')
            slider_pr.setAutoDraw(True)
        if slider_pr.status == STARTED:
            if bool(img1stop == 1):
                # keep track of stop time/frame for later
                slider_pr.tStop = t  # not accounting for scr refresh
                slider_pr.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'slider_pr.stopped')
                slider_pr.setAutoDraw(False)
        
        # *slider_pr2* updates
        if slider_pr2.status == NOT_STARTED and img2start == 1:
            # keep track of start time/frame for later
            slider_pr2.frameNStart = frameN  # exact frame index
            slider_pr2.tStart = t  # local t and not account for scr refresh
            slider_pr2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_pr2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider_pr2.started')
            slider_pr2.setAutoDraw(True)
        if slider_pr2.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                slider_pr2.tStop = t  # not accounting for scr refresh
                slider_pr2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'slider_pr2.stopped')
                slider_pr2.setAutoDraw(False)
        
        # *label1_pr* updates
        if label1_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            label1_pr.frameNStart = frameN  # exact frame index
            label1_pr.tStart = t  # local t and not account for scr refresh
            label1_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(label1_pr, 'tStartRefresh')  # time at next scr refresh
            label1_pr.setAutoDraw(True)
        if label1_pr.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                label1_pr.tStop = t  # not accounting for scr refresh
                label1_pr.frameNStop = frameN  # exact frame index
                label1_pr.setAutoDraw(False)
        
        # *label2_pr* updates
        if label2_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            label2_pr.frameNStart = frameN  # exact frame index
            label2_pr.tStart = t  # local t and not account for scr refresh
            label2_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(label2_pr, 'tStartRefresh')  # time at next scr refresh
            label2_pr.setAutoDraw(True)
        if label2_pr.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                label2_pr.tStop = t  # not accounting for scr refresh
                label2_pr.frameNStop = frameN  # exact frame index
                label2_pr.setAutoDraw(False)
        
        # *rating_val_pr* updates
        if rating_val_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rating_val_pr.frameNStart = frameN  # exact frame index
            rating_val_pr.tStart = t  # local t and not account for scr refresh
            rating_val_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_val_pr, 'tStartRefresh')  # time at next scr refresh
            rating_val_pr.setAutoDraw(True)
        if rating_val_pr.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                rating_val_pr.tStop = t  # not accounting for scr refresh
                rating_val_pr.frameNStop = frameN  # exact frame index
                rating_val_pr.setAutoDraw(False)
        # *mouse_pr* updates
        if mouse_pr.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_pr.frameNStart = frameN  # exact frame index
            mouse_pr.tStart = t  # local t and not account for scr refresh
            mouse_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_pr, 'tStartRefresh')  # time at next scr refresh
            mouse_pr.status = STARTED
            prevButtonState = mouse_pr.getPressed()  # if button is down already this ISN'T a new click
        if mouse_pr.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                mouse_pr.tStop = t  # not accounting for scr refresh
                mouse_pr.frameNStop = frameN  # exact frame index
                mouse_pr.status = FINISHED
        if mouse_pr.status == STARTED:  # only update if started and not finished!
            x, y = mouse_pr.getPos()
            mouse_pr.x.append(x)
            mouse_pr.y.append(y)
            buttons = mouse_pr.getPressed()
            mouse_pr.leftButton.append(buttons[0])
            mouse_pr.midButton.append(buttons[1])
            mouse_pr.rightButton.append(buttons[2])
            mouse_pr.time.append(mouse_pr.mouseClock.getTime())
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "practice" ---
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practices.addData('slider_pr.response', slider_pr.getRating())
    practices.addData('slider_pr.rt', slider_pr.getRT())
    practices.addData('slider_pr.history', slider_pr.getHistory())
    practices.addData('slider_pr2.response', slider_pr2.getRating())
    practices.addData('slider_pr2.rt', slider_pr2.getRT())
    practices.addData('slider_pr2.history', slider_pr2.getHistory())
    # store data for practices (TrialHandler)
    practices.addData('mouse_pr.x', mouse_pr.x)
    practices.addData('mouse_pr.y', mouse_pr.y)
    practices.addData('mouse_pr.leftButton', mouse_pr.leftButton)
    practices.addData('mouse_pr.midButton', mouse_pr.midButton)
    practices.addData('mouse_pr.rightButton', mouse_pr.rightButton)
    practices.addData('mouse_pr.time', mouse_pr.time)
    practices.addData('mouse_pr.clicked_name', mouse_pr.clicked_name)
    # the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'practices'


# --- Prepare to start Routine "ready" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_3
#Change the text according to the selected language, function SetTxtInstr2()
if english:
    ready_2.text = "Ready to begin?"
    txt_next_3.text = "BEGIN"
else:
    ready_2.text = "Prêt à commencer ?"
    txt_next_3.text = "COMMENCER"
txt_next_3.setPos([next_3.pos])
# setup some python lists for storing info about the mouse_3
mouse_3.clicked_name = []
gotValidClick = False  # until a click is received
mouse_3.mouseClock.reset()
# keep track of which components have finished
readyComponents = [ready_2, next_3, txt_next_3, mouse_3]
for thisComponent in readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ready" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from code_3
    #Change the color of highlighed rect
    if next_3.contains(mouse_3):
            next_3.opacity=0.99
            txt_next_3.opacity=2
    else:
            next_3.opacity=0.73
            txt_next_3.opacity=0.73
    
    # *ready_2* updates
    if ready_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ready_2.frameNStart = frameN  # exact frame index
        ready_2.tStart = t  # local t and not account for scr refresh
        ready_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ready_2, 'tStartRefresh')  # time at next scr refresh
        ready_2.setAutoDraw(True)
    
    # *next_3* updates
    if next_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_3.frameNStart = frameN  # exact frame index
        next_3.tStart = t  # local t and not account for scr refresh
        next_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'next_3.started')
        next_3.setAutoDraw(True)
    
    # *txt_next_3* updates
    if txt_next_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_next_3.frameNStart = frameN  # exact frame index
        txt_next_3.tStart = t  # local t and not account for scr refresh
        txt_next_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_next_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_next_3.started')
        txt_next_3.setAutoDraw(True)
    # *mouse_3* updates
    if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_3.frameNStart = frameN  # exact frame index
        mouse_3.tStart = t  # local t and not account for scr refresh
        mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_3.started', t)
        mouse_3.status = STARTED
        prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
    if mouse_3.status == STARTED:  # only update if started and not finished!
        buttons = mouse_3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(next_3)
                    clickableList = next_3
                except:
                    clickableList = [next_3]
                for obj in clickableList:
                    if obj.contains(mouse_3):
                        gotValidClick = True
                        mouse_3.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ready" ---
for thisComponent in readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(trialConditions),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code
    img2start = False
    img3start = False
    img1stop = False
    image_1.opacity = 0
    image_2.opacity = 0
    startingPos1 = True
    startingPos2 = True
    
    #Adapt the color and size of the marker to the slider
    col = 'black'
    
    #Show rating
    preview_pos = (0.613, 0)
    rating_val.setPos(preview_pos)
    rating_val.alignHoriz='right'
    # the position of the rating value differs using Python (probably because of the alignHoriz function), so we are fixing it
    
    #Sliders
    slider1_is_initialized = False
    slider2_is_initialized = False
    
    slider.lastrating = ""
    
    #Show scores
    txtScoreY = ""
    txtScoreN = ""
    
    #opacity timers
    timer1 = core.Clock()
    timer2 = core.Clock()
    opacity1 = 0
    opacity2 = 0
    
    #Change the text according to the selected language, function SetTxtInstr()
    if english:
        label1.text = "100% YES"
        label2.text = "100% NO"
        txtScoreY = "% YES"
        txtScoreN = "% NO"
    else:
        label1.text = "100% OUI"
        label2.text = "100% NON"
        txtScoreY = "% OUI"
        txtScoreN = "% NON"
    text_1.setText(txt_1)
    text_2.setText(txt_2)
    text_3.setText(txt_3)
    image_1.setImage(img_1)
    image_2.setImage(img_2)
    image_3.setImage(img_3)
    slider.reset()
    slider2.reset()
    rating_val.setPos(preview_pos)
    rating_val.setText('')
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    mouse.mouseClock.reset()
    # keep track of which components have finished
    trialComponents = [text_1, text_2, text_3, image_1, image_2, image_3, slider, slider2, label1, label2, rating_val, mouse]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from code
        # Initialize slider1 marker at 0 position
        if slider1_is_initialized == False and image_1.status == STARTED:
            try:
                slider.marker.setColor(col, colorSpace='rgb')
                slider.marker.size = (0.05, 0.05)
                slider.markerPos = 0
                slider1_is_initialized = True
                slider._onChange(True)()
                slider._setupSlider()
                timer1.add(5)
            except:
                print("An exception while initializing slider 1 occurred")
        # Initialize slider2 marker at slider1marker position
        if slider2_is_initialized == False and image_2.status == STARTED:
            slider2.markerPos = slider.markerPos
            try:
                slider2.marker.setColor(col, colorSpace='rgb')
                slider2.marker.size = (0.05, 0.05)
                slider2_is_initialized = True
                slider2._onChange(True)()
                slider2._setupSlider()
                slider2.draw()
                slider2.setAutoDraw(True)
            except:
                print("An exception while initializing slider 2 occurred")
        
        
        # Compute opacities
        if opacity1<1 and not img2start:
            opacity1 = (timer1.getTime())/5
        elif opacity2<1 and img2start:
            opacity2 = (timer2.getTime())/5
        
        # Detect if we moved the marker
        if not img2start and slider.marker.contains(mouse) and mouse.getPressed()[0] == True:
            startingPos1 = False
        
        # Get keys
        keys = event.getKeys()
        
        # Moving slider using arrowKeys
        if not img2start and 'up' in keys:
            slider.markerPos += 10
            slider.recordRating(slider.markerPos)
            startingPos1 = False
        elif not img2start and 'down' in keys:
            slider.markerPos -= 10
            slider.recordRating(slider.markerPos)
            startingPos1 = False
        
        #print rating next to slider before releasing the mouse
        if not img2start and not startingPos1:
            #display rating value
            val = round(slider.markerPos)
            if val>=0:
                rating_val.text = str(int(abs(val)))+txtScoreY
            else:
                rating_val.text = str(int(abs(val)))+txtScoreN
                
        # Detect if we moved the marker
        if img2start and slider2.marker.contains(mouse) and mouse.getPressed()[0] == True:
            startingPos2 = False
            img1stop = True
        
        # Moving slider using arrowKeys
        if img2start and 'up' in keys:
            slider2.markerPos += 10
            slider2.recordRating(slider2.markerPos)
            startingPos2 = False
            img1stop = True
        elif img2start and 'down' in keys:
            slider2.markerPos -= 10
            slider2.recordRating(slider2.markerPos)
            startingPos2 = False
            img1stop = True
            
        #print rating next to slider before releasing the mouse
        if img2start and not startingPos2:
            #display rating value
            val = round(slider2.markerPos)
            if val>=0:
                rating_val.text = str(int(abs(val)))+txtScoreY
            else:
                rating_val.text = str(int(abs(val)))+txtScoreN
        
        #Start img2 and img3
        if t >= 5 and image_2.status == NOT_STARTED and image_1.opacity >= 1.0:
            img2start = True
            slider2.reset()
            slider.lastrating = slider.markerPos
            timer2.reset()
            rating_val.text = ""
        elif t >= 10.0 and image_3.status == NOT_STARTED and image_2.opacity >= 1.0:
            img3start = True
            img1stop = True
        
        # *text_1* updates
        if text_1.status == NOT_STARTED and frameN >= 0.0:
            # keep track of start time/frame for later
            text_1.frameNStart = frameN  # exact frame index
            text_1.tStart = t  # local t and not account for scr refresh
            text_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_1, 'tStartRefresh')  # time at next scr refresh
            text_1.setAutoDraw(True)
        if text_1.status == STARTED:
            if bool(img2start == 1):
                # keep track of stop time/frame for later
                text_1.tStop = t  # not accounting for scr refresh
                text_1.frameNStop = frameN  # exact frame index
                text_1.setAutoDraw(False)
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and img2start == 1:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        if text_2.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.frameNStop = frameN  # exact frame index
                text_2.setAutoDraw(False)
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and img3start == 1:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            text_3.setAutoDraw(True)
        if text_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                text_3.tStop = t  # not accounting for scr refresh
                text_3.frameNStop = frameN  # exact frame index
                text_3.setAutoDraw(False)
        
        # *image_1* updates
        if image_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_1.frameNStart = frameN  # exact frame index
            image_1.tStart = t  # local t and not account for scr refresh
            image_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_1.started')
            image_1.setAutoDraw(True)
        if image_1.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                image_1.tStop = t  # not accounting for scr refresh
                image_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_1.stopped')
                image_1.setAutoDraw(False)
        if image_1.status == STARTED:  # only update if drawing
            image_1.setOpacity(opacity1, log=False)
        
        # *image_2* updates
        if image_2.status == NOT_STARTED and img2start == 1:
            # keep track of start time/frame for later
            image_2.frameNStart = frameN  # exact frame index
            image_2.tStart = t  # local t and not account for scr refresh
            image_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_2.started')
            image_2.setAutoDraw(True)
        if image_2.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                image_2.tStop = t  # not accounting for scr refresh
                image_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_2.stopped')
                image_2.setAutoDraw(False)
        if image_2.status == STARTED:  # only update if drawing
            image_2.setOpacity(opacity2, log=False)
        
        # *image_3* updates
        if image_3.status == NOT_STARTED and img3start == 1:
            # keep track of start time/frame for later
            image_3.frameNStart = frameN  # exact frame index
            image_3.tStart = t  # local t and not account for scr refresh
            image_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_3.started')
            image_3.setAutoDraw(True)
        if image_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_3.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                image_3.tStop = t  # not accounting for scr refresh
                image_3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_3.stopped')
                image_3.setAutoDraw(False)
        
        # *slider* updates
        if slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider.frameNStart = frameN  # exact frame index
            slider.tStart = t  # local t and not account for scr refresh
            slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider.started')
            slider.setAutoDraw(True)
        if slider.status == STARTED:
            if bool(img1stop == 1):
                # keep track of stop time/frame for later
                slider.tStop = t  # not accounting for scr refresh
                slider.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'slider.stopped')
                slider.setAutoDraw(False)
        
        # *slider2* updates
        if slider2.status == NOT_STARTED and img2start == 1:
            # keep track of start time/frame for later
            slider2.frameNStart = frameN  # exact frame index
            slider2.tStart = t  # local t and not account for scr refresh
            slider2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider2.started')
            slider2.setAutoDraw(True)
        if slider2.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                slider2.tStop = t  # not accounting for scr refresh
                slider2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'slider2.stopped')
                slider2.setAutoDraw(False)
        
        # *label1* updates
        if label1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            label1.frameNStart = frameN  # exact frame index
            label1.tStart = t  # local t and not account for scr refresh
            label1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(label1, 'tStartRefresh')  # time at next scr refresh
            label1.setAutoDraw(True)
        if label1.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                label1.tStop = t  # not accounting for scr refresh
                label1.frameNStop = frameN  # exact frame index
                label1.setAutoDraw(False)
        
        # *label2* updates
        if label2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            label2.frameNStart = frameN  # exact frame index
            label2.tStart = t  # local t and not account for scr refresh
            label2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(label2, 'tStartRefresh')  # time at next scr refresh
            label2.setAutoDraw(True)
        if label2.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                label2.tStop = t  # not accounting for scr refresh
                label2.frameNStop = frameN  # exact frame index
                label2.setAutoDraw(False)
        
        # *rating_val* updates
        if rating_val.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rating_val.frameNStart = frameN  # exact frame index
            rating_val.tStart = t  # local t and not account for scr refresh
            rating_val.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_val, 'tStartRefresh')  # time at next scr refresh
            rating_val.setAutoDraw(True)
        if rating_val.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                rating_val.tStop = t  # not accounting for scr refresh
                rating_val.frameNStop = frameN  # exact frame index
                rating_val.setAutoDraw(False)
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:
            if bool(img3start == 1):
                # keep track of stop time/frame for later
                mouse.tStop = t  # not accounting for scr refresh
                mouse.frameNStop = frameN  # exact frame index
                mouse.status = FINISHED
        if mouse.status == STARTED:  # only update if started and not finished!
            x, y = mouse.getPos()
            mouse.x.append(x)
            mouse.y.append(y)
            buttons = mouse.getPressed()
            mouse.leftButton.append(buttons[0])
            mouse.midButton.append(buttons[1])
            mouse.rightButton.append(buttons[2])
            mouse.time.append(mouse.mouseClock.getTime())
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial" ---
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code
    # Save images times
    thisExp.addData('image_1.started', image_1.tStart)
    thisExp.addData('image_1.stopped', image_1.tStop)
    if slider.getRT() != None and image_1.tStart != None:
        thisExp.addData('image_1.rt', slider.getRT()-image_1.tStart)
    else:
        thisExp.addData('image_1.rt', '')
    thisExp.addData('image_2.started', image_2.tStart)
    thisExp.addData('image_2.stopped', image_2.tStop)
    if slider2.getRT() != None and image_2.tStart != None:
        thisExp.addData('image_2.rt', slider2.getRT()-image_2.tStart)
    else:
        thisExp.addData('image_2.rt', '')
    thisExp.addData('image_3.started', image_3.tStart)
    thisExp.addData('image_3.stopped', image_3.tStop)
    
    # Save additionals data
    
    # condition_type
    condition_type = ''
    
    if condition == condition[::-1]:
        condition_type = 'confirm'
    else:
        condition_type = 'disconfirm'
    thisExp.addData('condition_type', condition_type)
    
    # response_condition
    response_condition = ''
    
    if slider.getRating() is None or slider2.getRating() is None:
        response_condition = ''
    elif slider.getRating() < 0 and slider2.getRating() <= slider.getRating():
        response_condition = 'NN'
    elif slider.getRating() < 0 and slider2.getRating() > slider.getRating():
        response_condition = 'NY'
    elif slider.getRating() > 0 and slider2.getRating() < slider.getRating():
        response_condition = 'YN'
    elif slider.getRating() > 0 and slider2.getRating() >= slider.getRating():
        response_condition = 'YY'
    thisExp.addData('response_condition', response_condition)
    
    # match and answered trial
    match = ''
    answeredTrial = 0
    
    if condition and response_condition and condition == response_condition:
        match = 1
        answeredTrial = 1
    elif condition and response_condition and condition != response_condition:
        match = 0
        answeredTrial = 1
    thisExp.addData('match', match)
    thisExp.addData('answeredTrial', answeredTrial)
    
    # degree_change
    degree_change = ''
    
    if slider.getRating() is None or slider2.getRating() is None:
        degree_change = ''
    else:
        degree_change = abs(slider.getRating()-slider2.getRating())
    thisExp.addData('degree_change', degree_change)
    
    thisExp.addData('currentTrial', currentTrial)
    currentTrial = currentTrial + 1
    trials.addData('slider.response', slider.getRating())
    trials.addData('slider.rt', slider.getRT())
    trials.addData('slider.history', slider.getHistory())
    trials.addData('slider2.response', slider2.getRating())
    trials.addData('slider2.rt', slider2.getRT())
    trials.addData('slider2.history', slider2.getHistory())
    # store data for trials (TrialHandler)
    trials.addData('mouse.x', mouse.x)
    trials.addData('mouse.y', mouse.y)
    trials.addData('mouse.leftButton', mouse.leftButton)
    trials.addData('mouse.midButton', mouse.midButton)
    trials.addData('mouse.rightButton', mouse.rightButton)
    trials.addData('mouse.time', mouse.time)
    trials.addData('mouse.clicked_name', mouse.clicked_name)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# --- Prepare to start Routine "thanks" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_4
import traceback

#Change the text according to the selected language, function SetTxtInstr2()
if english:
    thx.text = "Thank you for your participation!"
else:
    thx.text = "Merci de votre participation!"
    
# DATA COMPUTATIONS
#Get Data
try:
    df1 = pd.DataFrame.from_dict(thisExp.getAllEntries())

    # Create all the variables we will need
    df1 = df1.assign(percent_trials_considered="",acc_confirm="",acc_disconfirm="",total_acc="",ratingchg_correctC="",ratingchg_correctD="",ratingchg_incorrectC="",ratingchg_incorrectD="",total_ratingchg="",rt_correctC="",rt_correctD="",rt_incorrectC="",rt_incorrectD="",total_rt="")
    
    #print("df1", df1)
    #print("df1 shape: ", df1.shape)

    # Compute the number of answered trials
    nb_answered_trials = len(df1.query('answeredTrial == 1'))
    nb_not_answered_trials = len(df1.query('answeredTrial == 0'))
    nb_trials = nb_answered_trials+nb_not_answered_trials

    # Select only answered trials so that it won't perturn means
    df1 = df1.query('answeredTrial == 1')
    df1.reset_index(drop=True, inplace=True) #indexing was a concern in some calculations.

    #We will now compute the scores
    df1["percent_trials_considered"] = (nb_answered_trials/nb_trials)*100
    df1["acc_confirm"] = df1.query('condition_type == "confirm"')['match'].mean()
    df1["acc_disconfirm"] = df1.query('condition_type == "disconfirm"')['match'].mean()
    df1["total_acc"] = df1['match'].mean()
    df1["ratingchg_correctC"] = df1.query('condition_type == "confirm" & match == 1')['degree_change'].mean()
    df1["ratingchg_correctD"] = df1.query('condition_type == "disconfirm" & match == 1')['degree_change'].mean()
    df1["ratingchg_incorrectC"] = df1.query('condition_type == "confirm" & match == 0')['degree_change'].mean()
    df1["ratingchg_incorrectD"] = df1.query('condition_type == "disconfirm" & match == 0')['degree_change'].mean()
    df1["total_ratingchg"] = df1['degree_change'].mean()
    df1["rt_correctC"] = df1.query('condition_type == "confirm" & match == 1')['slider2.rt'].mean()
    df1["rt_correctD"] = df1.query('condition_type == "disconfirm" & match == 1')['slider2.rt'].mean()
    df1["rt_incorrectC"] = df1.query('condition_type == "confirm" & match == 0')['slider2.rt'].mean()
    df1["rt_incorrectD"] = df1.query('condition_type == "disconfirm" & match == 0')['slider2.rt'].mean()
    df1["total_rt"] = df1['slider2.rt'].mean()

    # If we could not compute mean because we had empty values (no matches found or no degree changes) then we may have nan results
    # Replace nan results by empty string
    df1 = df1.fillna('')

    #print("df1", df1)
    #print("df1 shape: ", df1.shape)

    # Save task version and date
    taskVersion = "Offline_v3.0.2"
    df1["date_exp"] = startingDate
    df1["task_version"] = taskVersion

    thisExp.addData('date_exp', df1["date_exp"].iloc[0])
    thisExp.addData('task_version', df1["task_version"].iloc[0])
    thisExp.addData('percent_trials_considered', df1["percent_trials_considered"].iloc[0])
    thisExp.addData('acc_confirm', df1["acc_confirm"].iloc[0])
    thisExp.addData('acc_disconfirm', df1["acc_disconfirm"].iloc[0])
    thisExp.addData('total_acc', df1["total_acc"].iloc[0])
    thisExp.addData('ratingchg_correctC', df1["ratingchg_correctC"].iloc[0])
    thisExp.addData('ratingchg_correctD', df1["ratingchg_correctD"].iloc[0])
    thisExp.addData('ratingchg_incorrectC', df1["ratingchg_incorrectC"].iloc[0])
    thisExp.addData('ratingchg_incorrectD', df1["ratingchg_incorrectD"].iloc[0])
    thisExp.addData('total_ratingchg', df1["total_ratingchg"].iloc[0])
    thisExp.addData('rt_correctC', df1["rt_correctC"].iloc[0])
    thisExp.addData('rt_correctD', df1["rt_correctD"].iloc[0])
    thisExp.addData('rt_incorrectC', df1["rt_incorrectC"].iloc[0])
    thisExp.addData('rt_incorrectD', df1["rt_incorrectD"].iloc[0])
    thisExp.addData('total_rt', df1["total_rt"].iloc[0])
except Exception:
    print("An exception occurred. Error while computing scores.")
    traceback.print_exc()
    
# Send data to redcap
try:
    import requests, hashlib
    # Transform data to JSON Format
    # If we add or remove columns in the Google file, we must also change the variables here
    myDict = {}
    myDict["record_id"] = df1['participant'].iloc[0]
    myDict[redcapVars[1]] = df1['session'].iloc[0]
    myDict[redcapVars[2]] = df1['date_exp'].iloc[0]
    myDict[redcapVars[3]] = df1['task_version'].iloc[0]
    myDict[redcapVars[4]] = df1['percent_trials_considered'].iloc[0]
    myDict[redcapVars[5]] = df1['acc_confirm'].iloc[0]
    myDict[redcapVars[6]] = df1['acc_disconfirm'].iloc[0]
    myDict[redcapVars[7]] = df1['total_acc'].iloc[0]
    myDict[redcapVars[8]] = df1['ratingchg_correctC'].iloc[0]
    myDict[redcapVars[9]] = df1['ratingchg_correctD'].iloc[0]
    myDict[redcapVars[10]] = df1['ratingchg_incorrectC'].iloc[0]
    myDict[redcapVars[11]] = df1['ratingchg_incorrectD'].iloc[0]
    myDict[redcapVars[12]] = df1['total_ratingchg'].iloc[0]
    myDict[redcapVars[13]] = df1['rt_correctC'].iloc[0]
    myDict[redcapVars[14]] = df1['rt_correctD'].iloc[0]
    myDict[redcapVars[15]] = df1['rt_incorrectC'].iloc[0]
    myDict[redcapVars[16]] = df1['rt_incorrectD'].iloc[0]
    myDict[redcapVars[17]] = df1['total_rt'].iloc[0]
    
    data_to_send = [myDict]
    
    #print("data to send: ", data_to_send)
    
    url = 'https://portal.rimuhc.ca/cim/redcap/api/'
    redcap_data = {
        'token': redcapVars[0],
        'content': 'record',
        'format': 'json',
        'type': 'flat',
        'overwriteBehavior': 'normal',
        'forceAutoNumber': 'false',
        'data': json.dumps(data_to_send),
        'returnContent': 'ids',
        'returnFormat': 'json',
        'record_id': hashlib.sha1().hexdigest()[:17]
    }
    x = requests.post(url, data = redcap_data)
    print(x.text)
    print("data sent to redcap")
except Exception:
    print("An exception occurred. Error while sending data to redcap.")
    traceback.print_exc()
# keep track of which components have finished
thanksComponents = [thx]
for thisComponent in thanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "thanks" ---
while continueRoutine and routineTimer.getTime() < 2.0:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thx* updates
    if thx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thx.frameNStart = frameN  # exact frame index
        thx.tStart = t  # local t and not account for scr refresh
        thx.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thx, 'tStartRefresh')  # time at next scr refresh
        thx.setAutoDraw(True)
    if thx.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > thx.tStartRefresh + 2-frameTolerance:
            # keep track of stop time/frame for later
            thx.tStop = t  # not accounting for scr refresh
            thx.frameNStop = frameN  # exact frame index
            thx.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "thanks" ---
for thisComponent in thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
if routineForceEnded:
    routineTimer.reset()
else:
    routineTimer.addTime(-2.000000)

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
