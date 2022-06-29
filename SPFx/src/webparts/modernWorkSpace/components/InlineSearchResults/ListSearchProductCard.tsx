import * as React from 'react';
import styles from './ListSearchProductCard.module.scss';
import * as moment from 'moment';
import { PSearchResult } from '../model/ISearchResult';

interface cardProperty {
    imgSrc?: string;
    title: string;
    department: string;
    time: Date;
    product?: PSearchResult;
}

export const ListSearchProductCard= (props: cardProperty) => {
    return(
    <div className={styles.productCard}>
        <div className={styles.productCardDiv}>
            <div className={styles.productCardImage} style={props.imgSrc ? {backgroundImage: `url('${props.imgSrc}')`, backgroundColor: 'rgba(255, 255, 255, 1)'} : {backgroundColor: 'rgb(192, 221, 244, 1)'}} >  
            
            </div>
            <div className={styles.productCardImages}> {props.product.onePagerUrl ? <img width={'15px'} onClickCapture={() => window.open(props.product.onePagerUrl, "_blank")} src={require('../images/DownloadIMG.png')} title = "Download Datasheet" alt="Download Datasheet"/> : ""} 

            </div>
            <p>Product</p> 
            <p className={styles.productCardTitle} title={props.product.Title}>{props.product.Title}</p>
            <p className={styles.productCardDept} title={props.product.AuthorDepartment}>{props.product.AuthorDepartment}</p>
            <p className={styles.productCardDate}>{moment(props.product.Modified).format('D MMMM YYYY hh:mmA')}</p>
            <select className={styles.productCardMore} onClick={(evnt: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
                console.log(evnt.currentTarget);
                const displayDiv = evnt.currentTarget.nextElementSibling, selectValue = evnt.currentTarget.value;
                console.log(displayDiv, selectValue);
                displayDiv.innerHTML = selectValue=="more" ? "" : props.product[selectValue] ;
                
            }}>
                <option value="more">See More</option>
                <option value="Features">Features</option>
                <option value="prodOverview">Overview</option>
                <option value="TargetMarket">Target Sector</option>
                <option value="problemSolved">Problem Solved</option>
                <option value="BusinessValue">Business Value</option>
                <option value="ExistingCustomer">Existing Customer</option>
                <option value="competingProducts">Competing Product</option>
            </select>
            <div className={styles.contentDispaySection}></div>
          
        </div>
    </div>
    );
};

const dropdownOnSelect = (evnt: React.SyntheticEvent<Element, Event>) => {
    console.log(evnt.currentTarget.nodeValue);
};

export default ListSearchProductCard;