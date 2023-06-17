interface DrinkImagesProps {
    links: string[]
}

export function DrinkImages ({links}:DrinkImagesProps){
    console.log(links)
    return (
        <div>
            {links.map(url=><img width={'150px'} height={'150px'} src={url}/>)}
        </div>
)
}