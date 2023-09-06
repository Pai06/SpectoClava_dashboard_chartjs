from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins=["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

df=pd.read_csv("pitch.csv")

def pitch_data_analysis(groupby:str, interested_column:str, title:str):
  groupby_data=df.groupby(groupby)[interested_column].size().sort_values(ascending=False)
  label_names=groupby_data.index.tolist()
  data=groupby_data.values.tolist()
  return_data={"labels":label_names,"data":data,"label":title}
  return return_data





@app.get("/")
async def get_data():


    pitch_pie_chart=pitch_data_analysis("Batting/Bowling Category","Batting/Bowling Score","Distribution of Pitches")



    return {
       "data":{
          "pitch_pie_chart":pitch_pie_chart
  
       }
    }

