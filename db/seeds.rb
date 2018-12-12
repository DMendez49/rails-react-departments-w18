20.times do
  d = Department.create(
    name: Faker::Commerce.department,
    description: Faker::Seinfeld.quote
  )
  10.times do
    d.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::GreekPhilosophers.quote,
      price: Faker::Commerce.price,
      image_url: Faker::Avatar.image
    )
  end
end

print `clear`
puts "20 Departments Seeded with 10 Items each!"
