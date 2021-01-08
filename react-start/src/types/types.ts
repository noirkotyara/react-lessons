export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType ={
    github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe?: string
}

export type UsersDataType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
}