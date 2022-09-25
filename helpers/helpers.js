export default function showNotification(setter){
	setter(true)
	setTimeout(()=>{
		setter(false)
	},200)
}