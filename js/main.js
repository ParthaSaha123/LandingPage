// step 1 compiler
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// step 3 compiler

//Select tab-content item

function selectItem(e){

    removeBorder();
    removeShow();

    //Add border to current tab
    this.classList.add('tab-border');

    const tabContentItems = document.querySelector(`#${this.id}-content`);
    tabContentItems.classList.add('show');
}

// step 4 compiler

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
// step 5 compiler

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// step 2 compiler

//Listen for tab-click
tabItems.forEach(item => item.addEventListener('click',selectItem));