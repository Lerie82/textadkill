document.querySelector('.content-ad-content').remove();
document.querySelector('.sidebar-ad').remove();
document.querySelector('.board-layout-ad').remove();
document.querySelector('.index-content-ad-wrapper').remove();
document.querySelector('.short-sidebar-ad-component.short-sidebar-ad-top').remove();
document.querySelector('.short-sidebar-ad-component.short-sidebar-ad-bottom').remove();
