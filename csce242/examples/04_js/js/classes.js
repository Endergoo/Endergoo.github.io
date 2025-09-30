class Dog
{
    constructor(title, breed, color, age, size, pic)
    {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item()
    {
        const section = document.createElement("section");
        section.classList.add("dog");

        
        
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const breed = document.createElement("breed");
        breed.innerHTML = this.breed;

        const age = document.createElement("age");
        age.innerHTML = this.age;
        return section;
    }
}

const dogs = [];
dogs.push(new Dog("Coco", "Yorkie", "Black", 6, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "med", "golden-retreiver.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "large", "pitt-bull.jpg"));

const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>
{
    dogListDiv.append(dog.item);
});