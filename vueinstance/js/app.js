new Vue({
    el: '#app',
    data:{
        title: 'The vue Instance',
        showParagraph: false
    },
    methods: {
        show: function(){
            this.showParagraph = true;
            this.updateTitle('The vue js instance (udpated!)');
        },
        updateTitle: function(title){
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function(){
            return this.title.toLowerCase();
        }
    },
    watch: {
      title: function(value){
          alert('Title changed, new value: ' + value);
      }  
    }
});