import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: Observable<any[]>;
  constructor(angularFirestore: AngularFirestore) {
    this.items = angularFirestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }
}
