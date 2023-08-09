const mLabel = document.querySelector('.mLabel');
const mDrop = document.getElementById('mDrop');
const mPlusMinus = document.querySelector('.mPlusMinus')

const dLabel = document.querySelector('.dLabel');
const dDrop = document.getElementById('dDrop');
const dPlusMinus = document.querySelector('.dPlusMinus')

mLabel.addEventListener('click', function(){
    if(mDrop.classList.contains('hidden')){
        mDrop.className ='showing';
        mPlusMinus.innerHTML ="<img src='images/close.svg' alt='close arrow' width='25px'>";
    } else{
        mDrop.className ='hidden';
        mPlusMinus.innerHTML ="<img src='images/open.svg' alt='open arrow' width='25px'>";
    }
});

dLabel.addEventListener('click', function(){
    if(dDrop.classList.contains('hidden')){
        dDrop.className ='showing';
        dPlusMinus.innerHTML ="<img src='images/close.svg' alt='close arrow' width='25px'>";
    } else{
        dDrop.className ='hidden';
        dPlusMinus.innerHTML ="<img src='images/open.svg' alt='open arrow' width='25px'>";
    }
});