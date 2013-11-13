app.service('PriorityService', [function () {
    var self = this;
    
    this.map = [
        {type: 'danger', description: 'Urgnet & Important', short: 'UI'},
        {type: 'warning', description: 'Not Urget but Important', short: 'NUI'},
        {type: 'info', description: 'Urgent but not Importnat', short: 'UNI'},
        {type: 'success', description: 'Not Urgent & not Important', short: 'NUNI'}
    ];
    
    this.test = function () {
        return 0;
    };
    
    this.foreground = function (id) {
        return retrieve(id, function (item) {
            return "text-" + item.type;
        });
    };
    
    this.background = function (id) {
        return retrieve(id, function (item) {
            return "btn-" + item.type;
        });
    };
    
    this.description = function (id) {
        return retrieve(id, function (item) {
            return item.description;
        });
    };
    
    function retrieve(id, callback){
        if(id !== null && id !== undefined){
            var item = self.map[id];
            return callback(item);
        }else{
            return "";
        }
    }
}]);