CREATE TABLE `car` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(1000),
  `car_category_id` bigint
);

CREATE TABLE `car_category` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100)
);

CREATE TABLE `model` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100),
  `trim_id` bigint DEFAULT null,
  `engine_id` bigint DEFAULT null,
  `body_id` bigint DEFAULT null,
  `drive_id` bigint DEFAULT null
);

CREATE TABLE `trim` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20),
  `image` varchar(200),
  `price` bigint,
  `car_id` bigint
);

CREATE TABLE `engine` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20),
  `image` varchar(200),
  `description` text,
  `max_output` varchar(100),
  `max_tok` varchar(100),
  `price` decimal,
  `car_id` bigint
);

CREATE TABLE `body` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20),
  `image` varchar(200),
  `description` text,
  `price` decimal,
  `car_id` bigint
);

CREATE TABLE `drive` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20),
  `image` varchar(200),
  `description` text,
  `price` decimal,
  `car_id` bigint
);

CREATE TABLE `ex_color` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20),
  `color_image` varchar(200),
  `rotation_image` varchar(200),
  `price` decimal,
  `trim_id` bigint
);

CREATE TABLE `ex_color_tag` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20),
  `count` bigint,
  `ex_color_id` bigint
);

CREATE TABLE `in_color` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20),
  `color_image` varchar(200),
  `in_image` varchar(200),
  `trim_id` bigint
);

CREATE TABLE `in_color_tag` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20),
  `count` bigint,
  `in_color_id` bigint
);

CREATE TABLE `default_option_category` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100)
);

CREATE TABLE `default_option_model` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `model_id` bigint,
  `default_option_id` bigint
);

CREATE TABLE `extra_option_model` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `model_id` bigint,
  `extra_option_id` bigint
);

CREATE TABLE `default_option` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100),
  `description` text,
  `image` varchar(200),
  `default_option_category_id` bigint
);

CREATE TABLE `sub_extra_option` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100),
  `description` text,
  `image` varchar(200),
  `extra_option_id` bigint
);

CREATE TABLE `extra_option` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100),
  `description` text,
  `image` varchar(200),
  `price` decimal,
  `x_position` Integer,
  `y_position` Integer,
  `extra_option_category_id` bigint
);

CREATE TABLE `extra_option_category` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100)
);

CREATE TABLE `extra_option_tag` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `count` bigint DEFAULT 0,
  `extra_option_id` bigint
);

CREATE TABLE `mychiving` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `is_end` boolean NOT NULL,
  `user_id` bigint,
  `model_id` bigint,
  `ex_color_id` bigint,
  `in_color_id` bigint,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `mychiving_extra` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `mychiving_id` bigint,
  `extra_option_id` bigint
);

CREATE TABLE `Users` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(200)
);

CREATE TABLE `car_review` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `writer` varchar(20),
  `is_purchased` boolean NOT NULL,
  `comment` text,
  `price` decimal,
  `model_id` bigint,
  `ex_color_id` bigint,
  `in_color_id` bigint,
  `created_at` timestamp
);

CREATE TABLE `total_tag_car_review` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `total_tag_id` bigint,
  `car_review_id` bigint
);

CREATE TABLE `total_tag` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100)
);

CREATE TABLE `option_review` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `extra_option_id` bigint,
  `car_review_id` bigint
);

ALTER TABLE `body` ADD FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);

ALTER TABLE `trim` ADD FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);

ALTER TABLE `engine` ADD FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);

ALTER TABLE `drive` ADD FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);

ALTER TABLE `ex_color` ADD FOREIGN KEY (`trim_id`) REFERENCES `trim` (`id`);

ALTER TABLE `in_color` ADD FOREIGN KEY (`trim_id`) REFERENCES `trim` (`id`);

ALTER TABLE `model` ADD FOREIGN KEY (`trim_id`) REFERENCES `trim` (`id`);

ALTER TABLE `model` ADD FOREIGN KEY (`engine_id`) REFERENCES `engine` (`id`);

ALTER TABLE `model` ADD FOREIGN KEY (`body_id`) REFERENCES `body` (`id`);

ALTER TABLE `model` ADD FOREIGN KEY (`drive_id`) REFERENCES `drive` (`id`);

ALTER TABLE `default_option_model` ADD FOREIGN KEY (`model_id`) REFERENCES `model` (`id`);

ALTER TABLE `default_option` ADD FOREIGN KEY (`default_option_category_id`) REFERENCES `default_option_category` (`id`);

ALTER TABLE `extra_option_model` ADD FOREIGN KEY (`extra_option_id`) REFERENCES `extra_option` (`id`);

ALTER TABLE `extra_option_model` ADD FOREIGN KEY (`model_id`) REFERENCES `model` (`id`);

ALTER TABLE `default_option_model` ADD FOREIGN KEY (`default_option_id`) REFERENCES `default_option` (`id`);

ALTER TABLE `sub_extra_option` ADD FOREIGN KEY (`extra_option_id`) REFERENCES `extra_option` (`id`);

ALTER TABLE `mychiving` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `total_tag_car_review` ADD FOREIGN KEY (`total_tag_id`) REFERENCES `total_tag` (`id`);

ALTER TABLE `total_tag_car_review` ADD FOREIGN KEY (`car_review_id`) REFERENCES `car_review` (`id`);

ALTER TABLE `option_review` ADD FOREIGN KEY (`extra_option_id`) REFERENCES `extra_option` (`id`);

ALTER TABLE `extra_option_tag` ADD FOREIGN KEY (`extra_option_id`) REFERENCES `extra_option` (`id`);

ALTER TABLE `option_review` ADD FOREIGN KEY (`car_review_id`) REFERENCES `car_review` (`id`);

ALTER TABLE `ex_color_tag` ADD FOREIGN KEY (`ex_color_id`) REFERENCES `ex_color` (`id`);

ALTER TABLE `mychiving_extra` ADD FOREIGN KEY (`mychiving_id`) REFERENCES `mychiving` (`id`);

ALTER TABLE `mychiving` ADD FOREIGN KEY (`model_id`) REFERENCES `model` (`id`);

ALTER TABLE `mychiving_extra` ADD FOREIGN KEY (`extra_option_id`) REFERENCES `extra_option` (`id`);

ALTER TABLE `in_color_tag` ADD FOREIGN KEY (`in_color_id`) REFERENCES `in_color` (`id`);

ALTER TABLE `car` ADD FOREIGN KEY (`car_category_id`) REFERENCES `car_category` (`id`);

ALTER TABLE `extra_option` ADD FOREIGN KEY (`extra_option_category_id`) REFERENCES `extra_option_category` (`id`);

ALTER TABLE `car_review` ADD FOREIGN KEY (`model_id`) REFERENCES `model` (`id`);

ALTER TABLE `car_review` ADD FOREIGN KEY (`ex_color_id`) REFERENCES `ex_color` (`id`);

ALTER TABLE `mychiving` ADD FOREIGN KEY (`ex_color_id`) REFERENCES `ex_color` (`id`);

ALTER TABLE `mychiving` ADD FOREIGN KEY (`in_color_id`) REFERENCES `in_color` (`id`);

ALTER TABLE `car_review` ADD FOREIGN KEY (`in_color_id`) REFERENCES `in_color` (`id`);
