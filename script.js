const allSideMenu = document.querySelectorAll('#sideItems .sideMenu.topMenu li a');
allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


const menuBar = document.querySelector('#navbarMain nav .bx.bx-menu');
const sideItems = document.getElementById('sideItems');
menuBar.addEventListener('click', function () {
	sideItems.classList.toggle('hide');
})