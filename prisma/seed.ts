import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clean existing data
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.farmer.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  // Create Admin
  const admin = await prisma.user.create({
    data: {
      name: "KVK Admin",
      email: "admin@kvk.gov.in",
      password: "$2b$10$dummyhashedpassword", // Use bcrypt in production
      role: "ADMIN",
      emailVerified: new Date(),
    },
  });

  // Create Farmer Users
  const farmerUser1 = await prisma.user.create({
    data: {
      name: "Rajesh Kumar Patel",
      email: "rajesh@greenvalley.in",
      password: "$2b$10$dummyhashedpassword",
      role: "FARMER",
      phone: "+919876543210",
      emailVerified: new Date(),
    },
  });

  const farmerUser2 = await prisma.user.create({
    data: {
      name: "Lakshmi Devi",
      email: "lakshmi@sunrisegardens.in",
      password: "$2b$10$dummyhashedpassword",
      role: "FARMER",
      phone: "+919876543211",
      emailVerified: new Date(),
    },
  });

  const farmerUser3 = await prisma.user.create({
    data: {
      name: "Abdul Rahman",
      email: "abdul@freshcatch.in",
      password: "$2b$10$dummyhashedpassword",
      role: "FARMER",
      phone: "+919876543212",
      emailVerified: new Date(),
    },
  });

  const farmerUser4 = await prisma.user.create({
    data: {
      name: "Priya Sharma",
      email: "priya@himalayandairy.in",
      password: "$2b$10$dummyhashedpassword",
      role: "FARMER",
      phone: "+919876543213",
      emailVerified: new Date(),
    },
  });

  // Create Customer
  const customer = await prisma.user.create({
    data: {
      name: "Amit Verma",
      email: "amit@example.com",
      password: "$2b$10$dummyhashedpassword",
      role: "CUSTOMER",
      phone: "+919876543220",
      emailVerified: new Date(),
    },
  });

  // Create Farmers
  const farmer1 = await prisma.farmer.create({
    data: {
      userId: farmerUser1.id,
      farmName: "Green Valley Organic Farm",
      description:
        "Third-generation organic farmer specializing in rice, wheat, and seasonal fruits. Our farm spans 25 acres using zero chemicals and natural irrigation.",
      location: "Nashik",
      district: "Nashik",
      state: "Maharashtra",
      pincode: "422001",
      farmSize: "25 acres",
      certifications: ["Organic India Certified", "FSSAI Registered"],
      categories: ["Crops", "Dairy"],
      images: [
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400",
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400",
      ],
      coverImage:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200",
      verificationStatus: "APPROVED",
      kvkVerifiedAt: new Date(),
      rating: 4.8,
      totalReviews: 89,
      totalOrders: 342,
    },
  });

  const farmer2 = await prisma.farmer.create({
    data: {
      userId: farmerUser2.id,
      farmName: "Sunrise Organic Gardens",
      description:
        "Award-winning organic farm known for premium vegetables and vermicompost. Practicing sustainable agriculture for over 15 years.",
      location: "Coimbatore",
      district: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641001",
      farmSize: "18 acres",
      certifications: ["NPOP Certified", "FSSAI Registered"],
      categories: ["Crops", "Manure"],
      images: [],
      coverImage:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200",
      verificationStatus: "APPROVED",
      kvkVerifiedAt: new Date(),
      rating: 4.9,
      totalReviews: 112,
      totalOrders: 518,
    },
  });

  const farmer3 = await prisma.farmer.create({
    data: {
      userId: farmerUser3.id,
      farmName: "Fresh Catch Fish Farm",
      description:
        "Sustainable aquaculture farm raising rohu, catla, and tilapia in natural ponds. Chemical-free fish fed with organic feed.",
      location: "Alappuzha",
      district: "Alappuzha",
      state: "Kerala",
      pincode: "688001",
      farmSize: "10 acres (ponds)",
      certifications: ["MPEDA Certified"],
      categories: ["Fish"],
      images: [],
      coverImage:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200",
      verificationStatus: "APPROVED",
      kvkVerifiedAt: new Date(),
      rating: 4.7,
      totalReviews: 67,
      totalOrders: 267,
    },
  });

  const farmer4 = await prisma.farmer.create({
    data: {
      userId: farmerUser4.id,
      farmName: "Himalayan Dairy Co-op",
      description:
        "Premium dairy cooperative with free-range A2 cows producing pure milk, ghee, and paneer using traditional methods.",
      location: "Dehradun",
      district: "Dehradun",
      state: "Uttarakhand",
      pincode: "248001",
      farmSize: "30 acres",
      certifications: ["FSSAI Registered", "A2 Milk Certified"],
      categories: ["Dairy", "Meat"],
      images: [],
      coverImage:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200",
      verificationStatus: "APPROVED",
      kvkVerifiedAt: new Date(),
      rating: 4.6,
      totalReviews: 45,
      totalOrders: 189,
    },
  });

  // Create Products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        farmerId: farmer1.id,
        name: "Organic Basmati Rice",
        description: "Premium long-grain basmati rice grown without chemicals.",
        category: "crops",
        price: 120,
        unit: "kg",
        stock: 500,
        images: [
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        ],
        isOrganic: true,
      },
    }),
    prisma.product.create({
      data: {
        farmerId: farmer1.id,
        name: "Alphonso Mangoes",
        description: "Premium Alphonso mangoes from Nashik orchards.",
        category: "crops",
        price: 450,
        unit: "dozen",
        stock: 200,
        images: [
          "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
        ],
        isOrganic: true,
      },
    }),
    prisma.product.create({
      data: {
        farmerId: farmer2.id,
        name: "Farm Fresh Eggs",
        description: "Free-range country eggs from healthy hens.",
        category: "meat",
        price: 85,
        unit: "dozen",
        stock: 1000,
        images: [
          "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=400",
        ],
        isOrganic: true,
      },
    }),
    prisma.product.create({
      data: {
        farmerId: farmer2.id,
        name: "Vermicompost Premium",
        description: "High-quality organic vermicompost for gardens.",
        category: "manure",
        price: 15,
        unit: "kg",
        stock: 5000,
        images: [
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
        ],
        isOrganic: true,
      },
    }),
    prisma.product.create({
      data: {
        farmerId: farmer3.id,
        name: "Fresh Rohu Fish",
        description: "Pond-raised rohu fish, chemical-free.",
        category: "fish",
        price: 280,
        unit: "kg",
        stock: 100,
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
        ],
        isOrganic: false,
      },
    }),
    prisma.product.create({
      data: {
        farmerId: farmer4.id,
        name: "Pure A2 Cow Milk",
        description: "Fresh A2 milk from free-range Sahiwal cows.",
        category: "dairy",
        price: 70,
        unit: "litre",
        stock: 300,
        images: [
          "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
        ],
        isOrganic: true,
      },
    }),
    prisma.product.create({
      data: {
        farmerId: farmer4.id,
        name: "Pure Desi Ghee",
        description: "Traditional bilona method desi ghee.",
        category: "dairy",
        price: 650,
        unit: "litre",
        stock: 50,
        images: [
          "https://images.unsplash.com/photo-1631209121750-a9f656ddd5ab?w=400",
        ],
        isOrganic: true,
      },
    }),
    prisma.product.create({
      data: {
        farmerId: farmer4.id,
        name: "Country Chicken",
        description: "Free-range country chicken, natural diet.",
        category: "meat",
        price: 350,
        unit: "kg",
        stock: 80,
        images: [
          "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400",
        ],
        isOrganic: true,
      },
    }),
  ]);

  // Create some reviews
  await prisma.review.createMany({
    data: [
      {
        userId: customer.id,
        farmerId: farmer1.id,
        rating: 5,
        comment:
          "Amazing quality rice! You can really taste the difference with organic.",
      },
      {
        userId: customer.id,
        farmerId: farmer2.id,
        rating: 5,
        comment:
          "Best eggs I've ever had. The yolks are so rich and orange!",
      },
      {
        userId: customer.id,
        farmerId: farmer4.id,
        rating: 4,
        comment:
          "Great A2 milk, tastes like childhood. Delivery was prompt.",
      },
    ],
  });

  console.log("✅ Seed completed successfully!");
  console.log(`   Created:`);
  console.log(`   - 1 Admin`);
  console.log(`   - 4 Farmers (verified)`);
  console.log(`   - 1 Customer`);
  console.log(`   - ${products.length} Products`);
  console.log(`   - 3 Reviews`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
