import React from 'react'
import Story from './Story';
import './StoryReel.css'
import { AddIcon } from '@material-ui/icons/Add';

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
            image="https://cdn5.vectorstock.com/i/1000x1000/49/09/mountains-landscape-in-beautiful-colors-vector-18884909.jpg"
            profileSrc='https://b1.pngbarn.com/png/816/517/metrostation-plus-symbol-png-clip-art-thumbnail.png'
            title="Add to story"
            />
                        <Story 
            image="https://notiboom.com/wp-content/uploads/2020/05/LA-FELICIDAD-1-1-640x427.jpeg"
            profileSrc="https://yt3.ggpht.com/-N1K-ddUSbHM/AAAAAAAAAAI/AAAAAAAAAAA/cuTLD8oQJ2M/s32-c-k-no-mo-rj-c0xffffff/photo.jpg"
            title="George"
            />
                        <Story 
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/s960x960/117739944_1528709460627464_3466695927426866464_o.jpg?_nc_cat=103&_nc_sid=ca434c&_nc_eui2=AeHsHR-rYZEpMzpZuf0hn5I7AjVbx8ct6icCNVvHxy3qJ-I5EcphxrPryq2nt1kzqK4&_nc_ohc=lLLda6LnM9EAX8nauU1&_nc_ht=scontent.flim9-1.fna&tp=7&oh=f8c5c16a9c643e31828e9e9184f5bddc&oe=5F6DC34E"
            profileSrc="https://yt3.ggpht.com/-IA5FFnRrbRc/AAAAAAAAAAI/AAAAAAAAAAA/qRjGFj5tV3Q/s32-c-k-no-mo-rj-c0xffffff/photo.jpg"
            title="Paul"
            />
                                    <Story 
            image="https://static.nationalgeographicla.com/files/styles/image_3200/public/01-cat-questions-nationalgeographic_1228126.jpg?w=1600&h=900"
            profileSrc="https://yt3.ggpht.com/-e8IFpdH9Oaw/AAAAAAAAAAI/AAAAAAAAAAA/6o30pXMapcw/s64-c-k-no-mo-rj-c0xffffff/photo.jpgba7e2009c14f5b309&oe=5F6CB41F"
            title="John"
            />
                        <Story 
            image="https://es.mimascotayyo.bayer.com/sites/g/files/adhwdz626/files/styles/image_642w_x_424h/public/2020-04/todo-lo-que_necesitas-saber_sobre-las-pulgas_en-gatos.jpg?itok=WMJA5E59"
            profileSrc="https://yt3.ggpht.com/-Eha8WbCYHUU/AAAAAAAAAAI/AAAAAAAAAAA/tyFo3Yf48oM/s64-c-k-no-mo-rj-c0xffffff/photo.jpg"
            title="Anna"
            />
        </div>
    )
}

export default StoryReel
