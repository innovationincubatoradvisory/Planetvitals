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
          
          return botui.action.button({
            action : [
                {
                    text : 'World',
                    value : 'world',
                },
               // {
                 //   text : 'Region',
                   //  value : 'region'
               // },
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
                        botui.message.add({
                            type: 'html', // this is 'text' by default
                            content: '<iframe id="graph" src="https://test.planetvitals.com/worldgraph.html" style="height:400px; width:100%; "></iframe> <script> $("#graph").contents().find("#nav-tab").empty(); </script>'
                          });
                        options();
                    }
                    else if (res.value === 'table'){
                        // code to represent table .......
                        botui.message.add({
                            type: 'html', // this is 'text' by default
                            content: '<iframe id="graph" src="https://test.planetvitals.com/worldtable.html" style="height:400px; width:100%; "></iframe> <script> $("#graph").contents().find("#nav-tab").empty(); </script>'
                          });
                        options();
                    }
                    options();
                });
            /*    
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
               */

            }else if (res.value === 'country'){
                //////////..........  Country  ..........////////
                /*
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
                   */
                        botui.action.select({
                            action: {
                                placeholder : "Enter Country", 
                                //value: '1', // Selected value or selected object. Example: {value: "TR", text : "Türkçe" }
                                searchselect : true, // Default: true, false for standart dropdown
                                label : 'text', // dropdown label variable
                                options : [
                                                {value: "Finland", text : "Finland" },
                                                {value: "Brunei", text : "Brunei"},
                                                {value: "Cambodia", text : "Cambodia" },
                                                {value: "Lithuania", text : "Lithuania" },
                                                {value: "Bhutan", text : "Bhutan" },
                                                {value: "Mongolia", text : "Mongolia" },
                                                {value: "Bahamas", text : "Bahamas" },
                                                {value: "Montserrat", text : "Montserrat" },
                                                {value: "Mauritius", text : "Mauritius" },
                                                {value: "Mozambique", text : "Mozambique" },
                                                {value: "India", text : "India" },
                                                {value: "Croatia", text : "Croatia" },
                                                {value: "Hungary", text : "Hungary" },
                                                {value: "Channel Islands", text : "Channel Islands" },
                                                {value: "Norway", text : "Norway" },
                                                {value: "UAE", text : "UAE" },
                                                {value: "San Marino", text : "San Marino" },
                                                {value: "Slovenia", text : "Slovenia" },
                                                {value: "Romania", text : "Romania" },
                                                {value: "Qatar", text : "Qatar" },
                                                {value: "Serbia", text : "Serbia" },
                                                {value: "Cyprus", text : "Cyprus" },
                                                {value: "Ukraine", text : "Ukraine" },
                                                {value: "Iraq", text : "Iraq" },
                                                {value: "Togo", text : "Togo" },
                                                {value: "Georgia", text : "Georgia" },
                                                {value: "Costa Rica", text : "Costa Rica" },
                                                {value: "Namibia", text : "Namibia" },
                                                {value: "New Caledonia", text : "New Caledonia" },
                                                {value: "Nicaragua", text : "Nicaragua" },
                                                {value: "Timor-Leste", text : "Timor-Leste" },
                                                {value: "Uganda", text : "Uganda" },
                                                {value: "Uruguay", text : "Uruguay" },
                                                {value: "Uzbekistan", text : "Uzbekistan" },
                                                {value: "Venezuela", text : "Venezuela" },
                                                {value: "Zambia", text : "Zambia" },
                                                {value: "Zimbabwe", text : "Zimbabwe" },
                                                {value: "Kuwait", text : "Kuwait" },
                                                {value: "Lebanon", text : "Lebanon" },
                                                {value: "Philippines", text : "Philippines" },
                                                {value: "Poland", text : "Poland" },
                                                {value: "Liechtenstein", text : "Liechtenstein" },
                                                {value: "Spain", text : "Spain" },
                                                {value: "Ecuador", text : "Ecuador" },
                                                {value: "Chile", text : "Chile" },
                                                {value: "Niger", text : "Niger" },
                                                {value: "Vietnam", text : "Vietnam" },
                                                {value: "Vatican City", text : "Vatican City" },
                                                {value: "Turkey", text : "Turkey" },
                                                {value: "USA", text : "USA" },
                                                {value: "Sweden", text : "Sweden" },
                                                {value: "Panama", text : "Panama" },
                                                {value: "Dominican Republic", text : "Dominican Republic" },
                                                {value: "Grenada", text : "Grenada" },
                                                {value: "Switzerland", text : "Switzerland" },
                                                {value: "Malaysia", text : "Malaysia" },
                                                {value: "Greece", text : "Greece" },
                                                {value: "Israel", text : "Israel" },
                                                {value: "Papua New Guinea", text : "Papua New Guinea" },
                                                {value: "Seychelles", text : "Seychelles" },
                                                {value: "Sudan", text : "Sudan" },
                                                {value: "Sierra Leone", text : "Sierra Leone" },
                                                {value: "Somalia", text : "Somalia" },
                                                {value: "Suriname", text : "Suriname" },
                                                {value: "Syria", text : "Syria" },
                                                {value: "St. Vincent Grenadines", text : "St. Vincent Grenadines" },
                                                {value: "Palestine", text : "Palestine" },
                                                {value: "Russia", text : "Russia" },
                                                {value: "Pakistan", text : "Pakistan" },
                                                {value: "Nepal", text : "Nepal" },
                                                {value: "Ghana", text : "Ghana" },
                                                {value: "Greenland", text : "Greenland" },
                                                {value: "Gambia", text : "Gambia" },
                                                {value: "Guinea", text : "Guinea" },
                                                {value: "Egypt", text : "Egypt" },
                                                {value: "Barbados", text : "Barbados" },
                                                {value: "Benin", text : "Benin" },
                                                {value: "Belize", text : "Belize" },
                                                {value: "Netherlands", text : "Netherlands" },
                                                {value: "Canada", text : "Canada" },
                                                {value: "Iceland", text : "Iceland" },
                                                {value: "Portugal", text : "Portugal" },
                                                {value: "Oman", text : "Oman" },
                                                {value: "Latvia", text : "Latvia" },
                                                {value: "Nigeria", text : "Nigeria" },
                                                {value: "Monaco", text : "Monaco" },
                                                {value: "Peru", text : "Peru" },
                                                {value: "Mexico", text : "Mexico" },
                                                {value: "Trinidad and Tobago", text : "Trinidad and Tobago" },
                                                {value: "Tanzania", text : "Tanzania" },
                                                {value: "Saudi Arabia", text : "Saudi Arabia" },
                                                {value: "Luxembourg", text : "Luxembourg" },
                                                {value: "Slovakia", text : "Slovakia" },
                                                {value: "Tunisia", text : "Tunisia" },
                                                {value: "Malta", text : "Malta" },
                                                {value: "French Guiana", text : "French Guiana" },
                                                {value: "Moldova", text : "Moldova" },
                                                {value: "Jordan", text : "Jordan" },
                                                {value: "Thailand", text : "Thailand" },
                                                {value: "Taiwan", text : "Taiwan" },
                                                {value: "Paraguay", text : "Paraguay" },
                                                {value: "Faeroe Islands", text : "Faeroe Islands" },
                                                {value: "Honduras", text : "Honduras" },
                                                {value: "Saint Martin", text : "Saint Martin" },
                                                {value: "DRC", text : "DRC" },
                                                {value: "Jamaica", text : "Jamaica" },
                                                {value: "South Africa", text : "South Africa" },
                                                {value: "Morocco", text : "Morocco" },
                                                {value: "New Zealand", text : "New Zealand" },
                                                {value: "Senegal", text : "Senegal" },
                                                {value: "Martinique", text : "Martinique" },
                                                {value: "St. Barth", text : "St. Barth" },
                                                {value: "Cuba", text : "Cuba" },
                                                {value: "Gabon", text : "Gabon" },
                                                {value: "Japan", text : "Japan" },
                                                {value: "Hong Kong", text : "Hong Kong" },
                                                {value: "Estonia", text : "Estonia" },
                                                {value: "Macao", text : "Macao" },
                                                {value: "Maldives", text : "Maldives" },
                                                {value: "North Macedonia", text : "North Macedonia" },
                                                {value: "Bosnia and Herzegovina", text : "Bosnia and Herzegovina" },
                                                {value: "Mauritania", text : "Mauritania" },
                                                {value: "Cameroon", text : "Cameroon" },
                                                {value: "Burundi", text : "Burundi" },
                                                {value: "Bermuda", text : "Bermuda" },
                                                {value: "Botswana", text : "Botswana" },
                                                {value: "Guadeloupe", text : "Guadeloupe" },
                                                {value: "Guatemala", text : "Guatemala" },
                                                {value: "Guinea-Bissau", text : "Guinea-Bissau" },
                                                {value: "Guyana", text : "Guyana" },
                                                {value: "Haiti", text : "Haiti" },
                                                {value: "Isle of Man", text : "Isle of Man" },
                                                {value: "Kenya", text : "Kenya" },
                                                {value: "Kyrgyzstan", text : "Kyrgyzstan" },
                                                {value: "Saint Kitts and Nevis", text : "Saint Kitts and Nevis" },
                                                {value: "Kazakhstan", text : "Kazakhstan" },
                                                {value: "Laos", text : "Laos" },
                                                {value: "Saint Lucia", text : "Saint Lucia" },
                                                {value: "Belarus", text : "Belarus" },
                                                {value: "Gibraltar", text : "Gibraltar" },
                                                {value: "Eritrea", text : "Eritrea" },
                                                {value: "Fiji", text : "Fiji" },
                                                {value: "Libya", text : "Libya" },
                                                {value: "Montenegro", text : "Montenegro" },
                                                {value: "Madagascar", text : "Madagascar" },
                                                {value: "Mali", text : "Mali" },
                                                {value: "Singapore", text : "Singapore" },
                                                {value: "Sri Lanka", text : "Sri Lanka" },
                                                {value: "Réunion", text : "Réunion" },
                                                {value: "Rwanda", text : "Rwanda" },
                                                {value: "Sint Maarten", text : "Sint Maarten" },
                                                {value: "Mayotte", text : "Mayotte" },
                                                {value: "Curaçao", text : "Curaçao" },
                                                {value: "Eswatini", text : "Eswatini" },
                                                {value: "Congo", text : "Congo" },
                                                {value: "Turks and Caicos", text : "Turks and Caicos" },
                                                {value: "UK", text : "UK" },
                                                {value: "Ireland", text : "Ireland" },
                                                {value: "Myanmar", text : "Myanmar" },
                                                {value: "S. Korea", text : "S. Korea" },
                                                {value: "France", text : "France" },
                                                {value: "Germany", text : "Germany" },
                                                {value: "Diamond Princess", text : "Diamond Princess" },
                                                {value: "Denmark", text : "Denmark" },
                                                {value: "Czechia", text : "Czechia" },
                                                {value: "Azerbaijan", text : "Azerbaijan" },
                                                {value: "Bangladesh", text : "Bangladesh" },
                                                {value: "Armenia", text : "Armenia" },
                                                {value: "Antigua and Barbuda", text : "Antigua and Barbuda" },
                                                {value: "Aruba", text : "Aruba" },
                                                {value: "Australia", text : "Australia" },
                                                {value: "Burkina Faso", text : "Burkina Faso" },
                                                {value: "Djibouti", text : "Djibouti" },
                                                {value: "Dominica", text : "Dominica" },
                                                {value: "Liberia", text : "Liberia" },
                                                {value: "French Polynesia", text : "French Polynesia" },
                                                {value: "El Salvador", text : "El Salvador" },
                                                {value: "CAR", text : "CAR" },
                                                {value: "Colombia", text : "Colombia" },
                                                {value: "Cabo Verde", text : "Cabo Verde" },
                                                {value: "China", text : "China" },
                                                {value: "South Sudan", text : "South Sudan" },
                                                {value: "Saint Pierre Miquelon", text : "Saint Pierre Miquelon" },
                                                {value: "Caribbean Netherlands", text : "Caribbean Netherlands" },
                                                {value: "MS Zaandam", text : "MS Zaandam" },
                                                {value: "Falkland Islands", text : "Falkland Islands" },
                                                {value: "Sao Tome and Principe", text : "Sao Tome and Principe" },
                                                {value: "Italy", text : "Italy" },
                                                {value: "Iran", text : "Iran" },
                                                {value: "Belgium", text : "Belgium" },
                                                {value: "Austria", text : "Austria" },
                                                {value: "Bahrain", text : "Bahrain" },
                                                {value: "Algeria", text : "Algeria" },
                                                {value: "Albania", text : "Albania" },
                                                {value: "Afghanistan", text : "Afghanistan" },
                                                {value: "Andorra", text : "Andorra" },
                                                {value: "Anguilla", text : "Anguilla" },
                                                {value: "Angola", text : "Angola" },
                                                {value: "Brazil", text : "Brazil" },
                                                {value: "Argentina", text : "Argentina" },
                                                {value: "Bolivia", text : "Bolivia" },
                                                {value: "Western Sahara", text : "Western Sahara" },
                                                {value: "Ethiopia", text : "Ethiopia" },
                                                {value: "Equatorial Guinea", text : "Equatorial Guinea" },
                                                {value: "Cayman Islands", text : "Cayman Islands" },
                                                {value: "Malawi", text : "Malawi" },
                                                {value: "Chad", text : "Chad" },
                                                {value: "British Virgin Islands", text : "British Virgin Islands" },
                                                {value: "Yemen", text : "Yemen" },
                                                {value: "Ivory Coast", text : "Ivory Coast" }
                                          ],
                                button: {
                                  icon: 'check',
                                  label: 'OK'
                                }
                              }
                            
                        }).then(function(res){
                           var cntry = res.value.toLowerCase();
                           console.log(res.value);
                           botui.message.add({
                            type: 'html', // this is 'text' by default
                            content: '<iframe id="graph" src="https://test.planetvitals.com/country.html?country='+cntry+'" style="height:400px; width:100%; "></iframe>'
                          });
                          options();
                        });
                        
                    }
                    //options();
                })
                

            }    
               
            
        });
        
        options();  
      }  
      
    
  
 

options();