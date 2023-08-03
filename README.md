## OdysseyGPT BackGround
We are attempting to make a Chat bot that utilizes a Mutual Funds Forum BogleHeads as a financial advice tool to accurately procure crowd sourced opinions on topics otherwise couldn't be answers so well on ChatGPT. Our idea is to utilize a Large Language Model by adjusting an Open API Model and to create a GUI that is able to take input and generate a response based off of data we've processed, cleaned, and vectorized from the forum. 

## Consumer Need
These days there are many people such as college students, new parents, or low income families that have questions about basic money questions. Whether its where to invest their money, or how to save it everyone needs some place to get that information. ChatGPT is a good resource, however something it is something that is known to hallucinate and create false information without an backing to the information it provides. BogleHead is a good resource to get the correct financial answer to the questions people are asking, however it is a nightmare to navigate due to the presence of unrelated comments and flood of questions and answers to scroll through. That is why we wanted to provide an accurate and concise way for people to get their financial questions answered.

## Implementation

## Script to download html from website

wget \
     -U "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)" \
     --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --domains bogleheads.org \
     --no-parent \
         https://www.bogleheads.org/forum/
  

\*diagram\*


