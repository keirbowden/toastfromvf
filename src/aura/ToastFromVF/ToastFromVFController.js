({
	showToast : function(component, event, helper) {
        var toastEvent = $A.get('e.force:showToast');

        toastEvent.setParams({
            type: 'info',
            message: component.get('v.message')
        });
        toastEvent.fire();
	}
})