import Route from '@ember/routing/route';

export default Route.extend({
    model(){
       var voteCountA =this.controllerFor('header').get('voteCountA');
       console.log("voteCountA --fromcount",voteCountA) ;
       this.controllerFor('count').set('voteCountA',voteCountA);

       var voteCountB =this.controllerFor('header').get('voteCountB');
       console.log("voteCountB --fromcount",voteCountB) ;
       this.controllerFor('count').set('voteCountB',voteCountB);

       if(voteCountA < voteCountB){
        this.controllerFor('count').set("winB",true);
        this.controllerFor('count').set("winA",false);
        this.controllerFor('count').set("nowin",false);

    }else if (voteCountB < voteCountA)
    {
        this.controllerFor('count').set("winA",true); 
        this.controllerFor('count').set("winB",false);
        this.controllerFor('count').set("nowin",false);
    }
    else{
        this.controllerFor('count').set("nowin",true);
        this.controllerFor('count').set("winA",false); 
        this.controllerFor('count').set("winB",false);
    }
    }
});
