export default async function getUserProfile(token:string) {
    const response = await fetch(`https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/auth/me`,{
        method: "GET",
        headers: {
            authorization:`Bearer ${token}`,
        }
    })
    if(!response.ok){
        throw new Error("failed to get user profile") 
    }
    return await response.json()
}