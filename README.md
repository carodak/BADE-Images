<!---#### *Table of contents*
[TOC]
-->

#### *Table of contents*
- [BADE Images](#bade-images)
    * [Development](#development)
        + [Built with](#built-with)
        + [Prerequisites](#prerequisites)
        + [How to use?](#how-to-use)
    * [Features](#features)
    * [Code Reference](#code-reference)
    * [Code Example](#code-example)
    * [Outputs](#outputs)
    * [Contribute](#contribute)
    * [Authors and acknowledgment](#authors-and-acknowledgment)
    * [License](#license)
    * [References](#references)


# BADE Images

###### tags: `cognitive bias, bias against disconfirmatory evidence, decision making, psychosis, bade, psychopy, pavlovia`

> Cognitive task to detect bias against disconfirmatory evidence

BADE Images is a cognitive task designed to detect the bias against disconfirmatory evidence (BADE), that is, unwillingness to revise a belief in light of evidence that contradicts it. This task is based on previous BADE tasks [[1](#1),[2](#2)] and was originally designed for functional magnetic resonance imaging research [[3]](#3). Respondents must indicate whether they believe a partial image is of the word listed beneath it. Then, once more of the image is displayed, they may modify their rating.

This version can be completed in English or French with repeated admininstrations using different image sets. Pre/Post versions are already developed as described below and a larger bank of 352 images is available upon request. The task consists of 40 trials with 4 conditions (2 confirm, 2 disconfirm with 10 trials each) reflecting expected response patterns (Yes-Yes, No-No, No-Yes, Yes-No). 

<p align="center">
  <img src="https://github.com/carodak/BADE-Images-Pre/tree/main/documentation/bade_images.gif" width="100%" height="100%"/>
</p>

## Development
### Built with
Psychopy software using [Psychopy builder](https://www.psychopy.org/builder) with Javascript custom code. The task was tested under Google Chrome.
### Prerequisites
- Psychopy (v2020.2.8)
- Python (3.7.4)
- Google Chrome (90.0.4430.212) with Javascript (1.7)
### How to use?
This task can be administered entirely online through Pavlovia and/or offline with PsychoPy.

#### Online
- Create a [Pavlovia](https://gitlab.pavlovia.org/users/sign_in) account
- [Fork](https://pavlovia.org/docs/experiments/create-fork) the [BADE Images Pre](https://gitlab.pavlovia.org/katielavigne/bade-images-pre) and/or [BADE Images Post](https://gitlab.pavlovia.org/katielavigne/bade-images-post) task to your account
- In your [Pavlovia dashboard](https://pavlovia.org/dashboard?tab=0), the task should soon be listed under Experiments, which you can click on to View Code, Pilot, or Run. 
#### Offline
- Install [Psychopy](https://www.psychopy.org/download.html)
- Install [Python](https://www.python.org/downloads/)
- Download [BADE Images Pre](https://gitlab.pavlovia.org/katielavigne/bade-images-pre) and/or [BADE Images Post](https://gitlab.pavlovia.org/katielavigne/bade-images-post)
- Extract the archive
- Run Psychopy
- Go to File>Open... locate the folder of the Beads Distractor task and open BADE.psyexp

#### Offline/Online Capabilities
- After following all steps above, login with your Pavlovia credentials on PsychoPy
- Open the downloaded BADE-Images-Pre.psyexp
- Sync this task with the web project by clicking the left-most globe icon
- Start the experiment with the play button 
- This should launch the experiment in your browser on the pavlovia website
- If you have a warning on the pavlovia website, click on the link and put the experiment in Piloting mode
## Features
- Images fade-in over 5 seconds to emphasize evidence accumulation
- Pre & Post versions for repeated administrations
- Rating scale rather than yes/no responses for increased precision.
- Ability to use the up/down arrows to vote on the rating scale
- Prevent special characters in the participant's name
- Language selection (English or French) at the beginning of the experiment
- Selection buttons that make it possible to use the task on a tablet or smartphone (drag and drop not available for rating - click only)
- A practice session before beginning the task
- Preview of the score when drag & drop is performed
- Preview of the score is displayed if the participant has voted and is not displayed otherwise
- Automatically computing scores once the participant has finished the trials
- The computed scores are sent directly to the database of the Redcap online survey manager
## Code Reference
See documentation/code/methods_functions.md inside BADE Images folder.
## Code Example
The code interacts with the Builder components.


For example, if we create a Text component called "myText" with the builder and write "MAGIC DOES NOT EXIST" in its Text field. 
Then we can create a Code component that will contain the following Javascript code:

myText.text = "ABRACADABRA";

If we run the experiment online, myText will display ABRACADABRA.

## Outputs

At the end of the task a logfile is created. This file contains the data collected during the task.

We computed scores once the participant finished the trials (scores are computed when they reach the thx screen). These scores are sent directly to the database of the Redcap online survey manager. Below are the different variables that we compute:

| Variables | Description |
|---|---|
| subject  | Participant's identifier |
| language | Language selected |
| session | Number of the session (session 1 = pre, session 2 = post) |
| date | Date the task was completed |
| task_version | The release version of the task used |
| percent_trials_considered | The percentage of trials completed by the participant among all trials (i.e., the proportion of trials where the participant answered) |
| acc_confirm | Average number of matched responses on "confirm" trials (Yes-Yes, No-No) |
| acc_disconfirm | Average number of matched responses on "confirm" trials (Yes-No, Yes-No)|
| total_acc | Average number of matched responses on all trials |
| ratingchg_correctC | Average rating change between img1 and img2 on "confirm" trials with a matching response |
| ratingchg_correctD | Average rating change between img1 and img2 on "disconfirm" trials with a matching response |
| ratingchg_incorrectC | Average rating change between img1 and img2 on "confirm" trials with a non-matching response|
| ratingchg_incorrectD | Average rating change between img1 and img2 on "disconfirm" trials with a non-matching response |
| total_ratingchg | Average of the change of ratings between img1 and img2|
| rt_correctC | Average response time on "confirm" trials with a matching response |
| rt_correctD | Average response time on "disconfirm" trials with a matching response |
| rt_incorrectC | Average response time on "confirm" trials with a non-matching response |
| rt_incorrectD | Average response time on "disconfirm" trials with a non-matching response |
| total_rt | Average response time on all trials |

The exact calculations can be found in the code and are based on the following macros: https://drive.google.com/drive/folders/1UyBh4STZDGWsQuD7OjtX1u7Uq4cQE8qI?usp=sharing

## Contribute
E-mail: <katie.lavigne@mcgill.ca>
## Authors and acknowledgment
BADE Images was designed by Katie Lavigne, Todd Woodward, and Steffen Moritz. This version was developed by Katie Lavigne and Caroline Dakoure.
## License
Credit this work by copying the following to your credits section:

BADE Images Lavigne et al. (https://gitlab.pavlovia.org/crispstudies/bade-images-pre / https://gitlab.pavlovia.org/crispstudies/bade-images-post)
Licensed under GNU General Public License v3.0.
https://www.gnu.org/licenses/gpl-3.0.txt
## References
<a id="1">[1]</a> Moritz, S., Woodward, T.S., 2006. A generalized bias against disconfirmatory evidence in schizophrenia. Psychiatry Res. 142 (2–3), 157–165. doi.org/10.1016/j.psychres.2005.08.016.
<a id="2">[2]</a> Woodward, T. S., Buchy, L., Moritz, S., & Liotti, M., 2007. A bias against disconfirmatory evidence is associated with delusion proneness in a nonclinical sample. Schizophrenia bulletin. 33(4), 1023-1028. doi.org/10.1093/schbul/sbm013.
<a id="3">[3]</a> Lavigne, K. M., Menon, M., and Woodward, T. S., 2020. Functional Brain Networks Underlying Evidence Integration and Delusions in Schizophrenia. Schizophrenia Bulletin. 46, 175-183. doi.org/10.1093/schbul/sbz032.
