export type candidate = {
    name: string,
    address : string,
    phone: string,
    rating : number,
    isNew? : boolean | null,
    isFollowed? : boolean
    profileImage : string
}