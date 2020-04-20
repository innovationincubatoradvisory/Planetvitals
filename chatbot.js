var botui = new BotUI('chat-bot');
    
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

greeting = 'Hello, ' + greet ;

var yesorno = function(){
    return botui.action.button({
        action : [
            {
                text : 'Yes',
                value : 'yes'
            },
            {
                text : 'No',
                value : 'no'
            }
        ]
    });
}

var botMessage = function(msg){
    return botui.message.add({
        delay : 300,
        loading : true,
        content : msg
    });
}

botui.message.add({
    delay:500,
    loading:true,
    content: greeting
  }).then(function(){
      return botui.message.add({
          delay: 500,
          loading: true,
          content: 'This is Planet vital  CoronaVirus (COVID-19) Helpdesk to create awareness and self assessment scan has been developed on the basis of guideliness from the CDC(. This interaction should not be taken as expert medical advice. Any information you share with us will be kept strictly confidential.'
       });
  })

  

    var options = function(){

    
        botui.action.button({
          delay:1000,
          action : [
              {
                  text : 'Self assessment',
                  value : 'selfas'
              },
              {
                  text : 'FAQ',
                  value : 'faq'
              },
              {
                  text : 'COVID-19 Stats',
                  value : 'cov19stat'
              }
          ]
      
  }).then(function (res){
      var message;
      
      if(res.value === "selfas"){
          //..................SELF ASSESSMENT..............//
          
          message = ' Hey, I’m here to guide you through the Coronavirus Self-Checker. If you are experiencing a life-threatening emergency, please call 911 immediately. This system does not replace the judgment of healthcare professionals or the performance of any clinical assessment. To provide information on the right level of care, we are going to ask you a series of questions.';
          return botui.message.add({
            //type: 'html',
            delay : 1000,
            loading: true ,
            content: message
        }).then(function (){
            return botui.message.add({
                delay : 1000,
                loading : true,
                content : 'Are you ill, or caring for someone who is ill?'
            });
        }).then (function (){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(res){
            if(res.value === 'yes'){
                return botui.message.add({
                    delay : 500,
                    loading : true,
                    content : 'Are you answering for yourself or someone else?'
                });
            }else if(res.value === 'no'){
                //some code
            }
            
        }).then(function (){
            return botui.action.button({
                action : [
                    {
                        text : 'MySelf',
                        value : 'myself'
                    },
                    {
                        text : 'Someone else',
                        value : 'someone'
                    }
                ]
            });
        }).then(function (res){
            var message ;
            if(res.value == 'myself'){
                message = 'What is your age ?';   
            }else if(res.value == 'someone'){
                message = 'what is his/her age ? ';
            }
            return botui.message.add({
                delay : 500,
                loading : true,
                content : message
            });
        }).then (function (){
            /*
            return botui.action.select({
                action: {
                    placeholder : "Select Language", 
                    value: '1', // Selected value or selected object. Example: {value: "TR", text : "Türkçe" }
                    searchselect : true, // Default: true, false for standart dropdown
                    label : 'text', // dropdown label variable
                    options : [
                                    {value: "1", text : "0-2" },
                                    {value: "2", text : "2-4" },
                                    {value: "3", text : "5-9" },
                                    {value: "4", text : "10-18" },
                                    {value: "5", text : "19-29" },
                                    {value: "6", text : "30-39" },
                                    {value: "7", text : "40-49" },
                                    {value: "8", text : "50-59" },
                                    {value: "9", text : "60-64" },
                                    {value: "10", text : "65-69" },
                                    {value: "11", text : "70-79" },
                                    {value: "12", text : "80 +" },
                              ],
                    button: {
                      icon: 'check',
                      label: 'OK'
                    }
                  }
                
            });
            */
           return botui.action.text({
               action : {
                   placeholder : "Enter your Age"
               }
           });
        }).then (function (){
            return botui.message.add({
                delay : 300,
                loading : true,
                content : 'What is your gender ? '
            });
        }).then(function (){
            return botui.action.button({
                action : [
                    {
                        text : 'Male',
                        value : 'male'
                    },
                    {
                        text : 'Female',
                        value : 'female'
                    },
                    {
                        text : 'Others',
                        value : 'others'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay : 300,
                loading : true,
                content : 'Are you experiencing any life-threatening symptoms'
            });
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay: 300,
                loading :true ,
                content: 'Gasping for air or cannot talk without catching your breath (extremely difficult breathing)'
            });
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay : 300,
                loading : true,
                content : 'Blue-colored lips or face'
            });
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay : 300 ,
                loading : true,
                content : 'Severe and constant pain or pressure in the chest ?'
            });
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay: 300,
                loading : true ,
                content : 'Severe and constant dizziness or lightheadedness ?'
            });
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay : 300,
                loading : true,
                content : 'Acting confused (new or worsening) ?'
            });
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay : 300,
                loading : true,
                content : 'Unconscious or very difficult to wake up ?'
            });
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay : 300,
                loading : true,
                content : 'Slurred speech (new or worsening) ?'
            });
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
            return botui.message.add({
                delay : 300,
                loading : true,
                content : 'New seizure or seizures that won’t stop'
            });    
        }).then(function(){
            return botui.action.button({
                action : [
                    {
                        text : 'Yes',
                        value : 'yes'
                    },
                    {
                        text : 'No',
                        value : 'no'
                    }
                ]
            });
        }).then(function(){
             botui.message.add({
                delay : 500,
                loading : true,
                content : 'Call 911 - You may be having a medical emergency.Call 911 now. Immediate medical attention is needed. Tell the 911 operator if you have been in contact with someone with COVID-19 or if you have recently been to an area where COVID-19 is spreading.'
            });
            options();
        });  
        
    
    
      }else if ( res.value === 'faq'){








          //..................  FAQ  ......................//
          //some code

          

            var token_for_query="Invalid";
            var Resultanswer="Sorry, I dint get you";
            var rsltaws;
            function Initialise_chat(){

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({"projectname":"planervitals"});

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("https://loopback-bot-dialogflow.holaa.ai/dialogflowapi/gettoken", requestOptions)
                .then(response => response.json())
                .then(result => {token_for_query=result.token;
                 Qn("hi");
                })
                .catch(error => console.log('error', error));
                }

                async function Qn(a){
                var myHeaders1 = new Headers();
                var k="Bearer "+token_for_query;
                myHeaders1.append('Content-Type', 'application/json');
                myHeaders1.append('Authorization', k);
                var raw = JSON.stringify({"queryInput":{"text":{"text":a,"languageCode":"en"}}});

                var requestOptions = {
                method: 'POST',
                headers: myHeaders1,
                body: raw,
                redirect: 'follow'
                };


                var rslt = await fetch("https://dialogflow.googleapis.com/v2beta1/projects/planervitals-nbuvgy/agent/sessions/12345:detectIntent", requestOptions)
                .then(response => response.json())
                .then(result => {
                    Resultanswer=result.queryResult.fulfillmentText;
                // console.log(Resultanswer);
                    
                botui.message.add({
                    //type: 'html',
                    delay : 1000,
                    loading: true ,
                    content: Resultanswer
                }).then(function(){
                    botui.action.text({
                        action : {
                            placeholder:'Type somthing'
                        }
                    }).then(function(res){
                        if (res.value !== 'back'){
                            Qn(res.value);
                        }else{
                            options();
                        }
                    });
                });
                    //return Resultanswer ;
                })
                .catch(error => console.log('error', error));

                //console.log(rslt);
                return rslt;

            }
                Initialise_chat();
                


                
                  













       // options();

      }else if ( res.value === 'cov19stat'){
          //...............  COVID 19 STATS  ..............//
          //some code
          /*
          return botui.action.button({
            action : [
                {
                    text : 'World',
                    value : 'world',
                },
                {
                    text : 'Region',
                     value : 'region'
                },
                {
                    text : 'Country',
                    value : 'country'
                }

            ]
        }).then(function (res){
            if(res.value === 'world'){
                //............... world .................//
                return botui.action.button({
                    action : [
                        {
                            text : 'Graph',
                            value : 'graph'
                        },
                        {
                            text : 'Table',
                            value : 'table'
                        }                
                    ]
                }).then(function(res){
                    if  (res.value === 'graph'){
                        // code to represent graph.......
                        console.log('working');
                    }
                    else if (res.value === 'table'){
                        // code to represent table .......
                        console.log('working');
                    }
                    options();
                });
            }else if(res.value === 'region'){
                //............... Region .................//
                return botui.action.button({
                    action : [
                        {
                            text : 'Graph',
                            value : 'graph'
                        },
                        {
                            text : 'Table',
                            value : 'table'
                        }                
                    ]
                }).then(function(res){
                    if  (res.value === 'graph'){
                        // code to represent graph.......
                        console.log('working');
                    }
                    else if (res.value === 'table'){
                        // code to represent table .......
                        console.log('working');
                    }
                    options();
                });
            }else if (res.value === 'country'){
                //////////..........  Country  ..........////////
                return botui.action.button({
                    action : [
                        {
                            text : 'My country',
                            value : 'location'
                        },
                        {
                            text : 'Input',
                            value : 'input'
                        }                
                    ]
                }).then(function(res){
                    if (res.value === 'location'){
                        //code to represent data of country from location...
                    }else if (res.value === 'input'){
                        //code to represent data of input country....
                        botui.action.text({
                            action: {
                              sub_type: 'text',
                              placeholder: 'Enter your text here',
                              value : ''
                            }
                          }).then(function(res){
                              console.log(res.value);
                          });
                    }
                    options();
                })
                

            }    
               
            
        });
        */
        options();  
      }  
      
    
  });
}  

options();