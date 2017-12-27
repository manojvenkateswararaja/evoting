import Controller from '@ember/controller';

export default Controller.extend({
    isShowingModal:false,
    actions:{
        Submit: function () {
            
            var voterid=this.get('vote');
            this.set('voterid',voterid)
            console.log(voterid);
            if(voterid=="voter1"){
                var voter="1VX2sjZNg1VEoMoHHijZF5gyyxAwVFA4CtKZDw"
                console.log(voter,"voter");
            }
            else if(voterid=="voter2"){
                var voter="18qbK7c6XxPL1UmBzjjy3y3s6ts5Qi1jfZDz7u"
                console.log(voter,"voter");
            }
            else if(voterid=="voter3"){
                var voter="1NH4fdYBXqhhMgwBPXU8muETBYwgN1BPbvjkFt"
                console.log(voter,"voter");
            }
            else if(voterid=="voter4"){
                var voter="15NxHrrMGdX8MzYRXegpCZQgMzRHTWvGbcAA1Q"
                console.log(voter,"voter");
            }
            else if(voterid=="voter5"){
                var voter="17CdvQgVnHRpgfQ126dxMhneRMkHgagPpMKYWT"
                console.log(voter,"voter");
            }
            var name=this.get('Name');
            this.set('name',name)
            console.log(name);
            var age=this.get('age');
            this.set('age',age)
            console.log(age);
            var location=this.get('city');
            this.set('location',location)
            console.log(location);
            var quantity="1";
            this.set('quantity',quantity)
            console.log(quantity);
            // var partyAaddr="5252"
            // this.set('partyAaddr',partyAaddr)
            // console.log(partyAaddr);
            var transactiondetails={    
                "transactiondetails":
                {"partyA":
                    {"voterID":voter,
                    "Name":name,
                    "age":age,
                     "partyAddress":"1W39aKxTDCCuzw2gLgZRic4m3Yq1ac4udon4uE",
                    "location":location,
                        "qty":1}
             }
    }

           console.log("datastring" + JSON.stringify(transactiondetails));

           return $.ajax({
                url: 'http://192.168.0.8:3001/saveVoteA',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(transactiondetails),
                success: function (response) {
                    console.log(JSON.stringify(response));
                    var message = response.message;
                    console.log("message" + message);
                    if (message == "voted sucessfully!"){
                        console.log(">>>>>>>>>>>>>>>>>>>>in")
                                mycontroller.set('isShowingModal',true);
                    }
                }
            })
        },
        vote: function () {
            var voterid=this.get('Vote');
            this.set('voterid',voterid)
            console.log(voterid);
            if(voterid=="voter1"){
                var voter="1VX2sjZNg1VEoMoHHijZF5gyyxAwVFA4CtKZDw"
                console.log(voter,"voter");
            }
            else if(voterid=="voter2"){
                var voter="18qbK7c6XxPL1UmBzjjy3y3s6ts5Qi1jfZDz7u"
                console.log(voter,"voter");
            }
            else if(voterid=="voter3"){
                var voter="1NH4fdYBXqhhMgwBPXU8muETBYwgN1BPbvjkFt"
                console.log(voter,"voter");
            }
            else if(voterid=="voter4"){
                var voter="15NxHrrMGdX8MzYRXegpCZQgMzRHTWvGbcAA1Q"
                console.log(voter,"voter");
            }
            else if(voterid=="voter5"){
                var voter="17CdvQgVnHRpgfQ126dxMhneRMkHgagPpMKYWT"
                console.log(voter,"voter");
            }
            var Name=this.get('name');
            this.set('name',Name)
            console.log(name);
            var age=this.get('number');
            this.set('age',age)
            console.log(age);
            var location=this.get('City');
            this.set('location',location)
            console.log(location);
            var quantity="1";
            this.set('quantity',quantity)
            console.log(quantity);
            // var partyAaddr="5252"
            // this.set('partyAaddr',partyAaddr)
            // console.log(partyAaddr);
            var transactiondetails={    
                "transactiondetails":
                {"partyB":
                    {"voterID":voter,
                    "Name":Name,
                    "age":age,
                     "partyAddress":"1aRsfsn9P4SekXT37LkStgWKToKyevpmb82BA2",
                    "location":location,
                        "qty":1}
            }
        }

           console.log("datastring" + JSON.stringify(transactiondetails));

           return $.ajax({
                url: 'http://192.168.0.8:3001/saveVoteB',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(transactiondetails),
                success: function (response) {
                    console.log(JSON.stringify(response));
                    var message = response.message;
                    console.log("message" + message);
                    if (message == "voted sucessfully!"){
                        console.log(">>>>>>>>>>>>>>>>>>>>in")
                                mycontroller.set('isShowingModal',true);
                    }
                }
            })
        },
        results:function(){
            var datastring={
                  
                    "partyAaddress":"1W39aKxTDCCuzw2gLgZRic4m3Yq1ac4udon4uE",
                      "partyBaddress":"1aRsfsn9P4SekXT37LkStgWKToKyevpmb82BA2"

            }
            console.log("navigate");
            var mycontroller = this;
            return $.ajax({
                url: 'http://192.168.0.8:3001/getResult',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(datastring),
                success: function (response) {
                    console.log(response);
                    var voteCountA =response.voteCountA.voteCount;
                    console.log("a--",voteCountA);
                    var voteCountB =response.voteCountB.voteCount;
                    console.log("b--",voteCountB)
                    mycontroller.set("voteCountB",voteCountB);
                    mycontroller.set("voteCountA",voteCountA);
                    
                    mycontroller.transitionToRoute('count')
                }
            })
            
            
            
        }
        
    }
});
