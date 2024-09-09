import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsList: Project[] = [
    {
      id: 1,
      title: 'aira',
      img: 'https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024',
      link: 'aira',
      status: 'live',
    },
    {
      id: 2,
      title: 'correlated',
      img: 'https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024',
      link: 'correlated',
      status: 'live',
    },
    {
      id: 3,
      title: 'channel 5',
      img: 'https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024',
      link: 'channel 5',
      status: 'live',
    },
    {
      id: 4,
      title: 'ronald abram',
      img: 'https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024',
      link: 'ronald abram',
      status: 'live',
    },
    {
      id: 5,
      title: 'propeller',
      img: 'https://images.pexels.com/photos/18651821/pexels-photo-18651821/free-photo-of-north-american-t-28-b-trojan-shg-airshow-2022-sivrihisar-eskisehir-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'propeller',
      status: 'inactive',
    },
    {
      id: 6,
      title: 'schuh',
      img: 'https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024',
      link: 'schuh',
      status: 'live',
    },
    {
      id: 7,
      title: 'paperstreet',
      img: 'https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048',
      link: 'paperstreet',
      status: 'live',
    },
    {
      id: 8,
      title: 'OH.SUPPLY',
      img: 'https://images.pexels.com/photos/7491159/pexels-photo-7491159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'OH.SUPPLY',
      status: 'live',
    },
    {
      id: 9,
      title: 'monokel eyeware',
      img: 'https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024',
      link: 'monokel eyeware',
      status: 'live',
    },
    {
      id: 10,
      title: 'lawtrades',
      img: 'https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024',
      link: 'lawtrades',
      status: 'inactive',
    },
    {
      id: 11,
      title: 'baselworld',
      img: 'https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024',
      link: 'baselworld',
      status: 'inactive',
    },
    {
      id: 12,
      title: 'NYCP',
      img: 'https://images.pexels.com/photos/5825359/pexels-photo-5825359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'NYCP',
      status: 'live',
    },
  ];
}
