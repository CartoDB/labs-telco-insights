


create new numeric column "quad_cat_axh"

```sql
update stuartlynn.census_uber_clustering set quad_cat_axh = 1 where quad_cat = 1;
update stuartlynn.census_uber_clustering set quad_cat_axh = 2 where quad_cat is null;
update stuartlynn.census_uber_clustering set quad_cat_axh = 3 where quads = 'HL';
update stuartlynn.census_uber_clustering set quad_cat_axh = 4 where quads = 'HH'
```

create new numeric column, "owner_occupied_housing_units_per_pop"

```sql
update stuartlynn.census_uber_clustering set owner_occupied_housing_units_per_pop = 0 where total_pop = 0;
update stuartlynn.census_uber_clustering set owner_occupied_housing_units_per_pop = owner_occupied_housing_units::numeric / total_pop where total_pop > 0
```

update 'prediction' so that williamsburg always looks good

```sql
update stuartlynn.census_uber_clustering set prediction = (prediction + 1.0)/2.0 where williamsburg = true 
```
