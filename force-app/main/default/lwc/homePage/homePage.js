import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class HotelHome extends NavigationMixin(LightningElement) {

    // Navigate to Guests object home
    navigateToGuests() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        });
    }

    // Navigate to Cases object home
    navigateToCases() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'home'
            }
        });
    }   

    // Navigate to Feedbacks object home
    navigateToFeedbacks() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Feedback__c',
                actionName: 'home'
            }
        });
    }

    // Navigate to Issue Actions object home
    navigateToIssueActions() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Issue_Action__c',
                actionName: 'home'
            }
        });
    }
}